import { console } from 'inspector';

import { IBotController } from '../../interfaces/IBotController.js';
import { IHumanActionsSimulator } from '../../interfaces/IHumanActionsSimulator.js';
import { IStealthBrowserManager } from '../../interfaces/IStealthBrowserManager.js';
import { IBotCommandDTO } from '../../interfaces/dto-interfaces/IBotCommandDTO.js';

import { HumanActionsSimulatorDesktop } from './HumanActionsSimulatorDesktop.js';
import { StealthBrowserManagerDesktop } from './StealthBrowserManagerDesktop.js';

export class BotControllerDesktop implements IBotController {
	private _stealthBrowserManager: IStealthBrowserManager | null;
	private _humanActionsSimulator: IHumanActionsSimulator | null = null;
	private _initialized: boolean = false;

	constructor() {
		this._stealthBrowserManager = new StealthBrowserManagerDesktop();
	}

	// Инициализация с таймаутом
	public async initialize(): Promise<void> {
		if (this._initialized) return;
		try {
			await new Promise(res => setTimeout(res, 100)); // Небольшая задержка перед инициализацией
			const page = await this._launchWithTimeout(25000);
			// Дожидаемся полной загрузки страницы перед созданием симулятора
			await page.waitForLoadState('load');
			await page.waitForTimeout(1000);
			console.log(await page.title());
			this._humanActionsSimulator = new HumanActionsSimulatorDesktop(page);
			this._initialized = true;
		} catch (error) {
			this._humanActionsSimulator = null;
			throw error;
		}
	}

	async dispatch(botCommand: IBotCommandDTO): Promise<void> {
		if (!botCommand || typeof botCommand !== 'object') {
			return;
		}
		if (!this._humanActionsSimulator) {
			throw new Error(
				'Ошибка: HumanActionsSimulator не инициализирован. Вызовите initialize() перед dispatch().'
			);
		}

		try {
			await this._humanActionsSimulator.dispatch(botCommand);
		} catch (error) {
			console.error('Ошибка при выполнении команды:', error);
			throw error;
		}
	}

	public async shutdown(): Promise<void> {
		if (!this._initialized) return;

		try {
			await this._stealthBrowserManager?.close();
		} catch (error) {
			console.error('Ошибка при закрытии браузера:', error);
		} finally {
			this._humanActionsSimulator = null;
			this._stealthBrowserManager = null;
			this._initialized = false;
		}
	}

	private async _launchWithRetries(
		retries: number,
		timeout: number
	): Promise<any> {
		for (let attempt = 1; attempt <= retries; attempt++) {
			try {
				return await this._launchWithTimeout(timeout + attempt * 5000); // Увеличиваем таймаут на 5 секунд с каждой попыткой
			} catch (error) {
				console.warn(
					`Попытка ${attempt} не удалась, увеличиваем таймаут:`,
					error
				);
				if (attempt === retries) throw error;
			}
		}
	}

	private async _launchWithTimeout(timeout: number): Promise<any> {
		return new Promise((resolve, reject) => {
			const timer = setTimeout(() => {
				reject(
					new Error('Timeout: запуск браузера превысил ' + timeout + ' мс')
				);
			}, timeout);

			this._stealthBrowserManager
				?.launch()
				.then(page => {
					clearTimeout(timer);
					resolve(page);
				})
				.catch(error => {
					clearTimeout(timer);
					reject(error);
				});
		});
	}
}
