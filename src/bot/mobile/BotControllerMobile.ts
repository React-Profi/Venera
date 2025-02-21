import { IBotCommand } from '../../interfaces/IBotCommand.js';
import { IBotController } from '../../interfaces/IBotController.js';
import { IHumanActionsSimulator } from '../../interfaces/IHumanActionsSimulator.js';
import { IStealthBrowserManager } from '../../interfaces/IStealthBrowserManager.js';

import { HumanActionsSimulatorMobile } from './HumanActionsSimulatorMobile.js';
import { StealthBrowserManagerMobile } from './StealthBrowserManagerMobile.js';

export class BotControllerMobile implements IBotController {
	private _stealthBrowserManager: IStealthBrowserManager;
	private _humanActionsSimulator: IHumanActionsSimulator | null = null;
	private _initPromise: Promise<void> | null = null;

	constructor(
		stealthBrowserManager: IStealthBrowserManager = new StealthBrowserManagerMobile()
	) {
		this._stealthBrowserManager = stealthBrowserManager;
	}

	private async initialize(): Promise<void> {
		if (this._initPromise) return this._initPromise;

		this._initPromise = (async () => {
			try {
				const page = await this._stealthBrowserManager.launch();
				this._humanActionsSimulator = new HumanActionsSimulatorMobile(page);
			} catch (error) {
				console.warn('Ошибка при запуске браузера:', error);
				this._initPromise = Promise.reject(error); // Теперь ошибка сохраняется!
				this._humanActionsSimulator = null;
				throw error;
			}
		})();

		return this._initPromise;
	}

	async dispatch(botCommand: IBotCommand): Promise<void> {
		if (!botCommand) {
			console.error('Ошибка: передана некорректная команда', botCommand);
			return;
		}

		await this.initialize();

		if (!this._humanActionsSimulator) {
			throw new Error(
				'Критическая ошибка: HumanActionsSimulator не был создан после initialize()'
			);
		}

		try {
			await this._humanActionsSimulator.dispatch(botCommand);
		} catch (error) {
			console.error('Ошибка при выполнении команды:', error);
		}
	}
}
