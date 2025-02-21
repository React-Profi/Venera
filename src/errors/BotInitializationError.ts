import { CustomError } from './CustomError.js';

export class BotInitializationError extends CustomError {
	constructor(details?: string) {
		super(`Ошибка инициализации бота: ${details || 'Неизвестно'}`);
		this.name = 'BotInitializationError';
	}
}
