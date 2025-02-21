import { BotInitializationError } from '../../errors/BotInitializationError.js';
import { BrowserLaunchError } from '../../errors/BrowserLaunchError.js';
import { CommandExecutionError } from '../../errors/CommandExecutionError.js';
import { IBotCommand } from '../../interfaces/IBotCommand.js';
import { IBotController } from '../../interfaces/IBotController.js';
import { IHumanActionsSimulator } from '../../interfaces/IHumanActionsSimulator.js';
import { IStealthBrowserManager } from '../../interfaces/IStealthBrowserManager.js';

import { HumanActionsSimulatorDesktop } from './HumanActionsSimulatorDesktop.js';
import { StealthBrowserManagerDesktop } from './StealthBrowserManagerDesktop.js';

export class BotControllerDesktop implements IBotController {
	private _stealthBrowserManager: IStealthBrowserManager;
	private _humanActionsSimulator!: IHumanActionsSimulator;
	private _initPromise: Promise<void>;

	constructor() {
		this._stealthBrowserManager = new StealthBrowserManagerDesktop();

		this._initPromise = this.initialize();
	}

	private async initialize(): Promise<void> {
		try {
			const page = await this._stealthBrowserManager.launch();
			this._humanActionsSimulator = new HumanActionsSimulatorDesktop(page);
		} catch (error) {
			console.warn('Ошибка при запуске браузера:', error);
			throw new BrowserLaunchError(
				error instanceof Error ? error.message : 'Неизвестная ошибка'
			);
		}
	}

	private async ensureInitialized(): Promise<void> {
		try {
			await this._initPromise;
		} catch (error) {
			throw new BotInitializationError('Бот не смог инициализироваться');
		}
	}

	async dispatch(botCommand: IBotCommand): Promise<void> {
		try {
			await this.ensureInitialized();
			await this._humanActionsSimulator.dispatch(botCommand);
		} catch (error: unknown) {
			if (error instanceof Error) {
				throw new CommandExecutionError(botCommand.toString(), error.message);
			} else {
				throw new CommandExecutionError(
					botCommand.toString(),
					'Неизвестная ошибка'
				);
			}
		}
	}
}
