import { CustomError } from "./CustomError.js";

export class BrowserLaunchError extends CustomError {
	constructor(details?: string) {
		super(`Ошибка запуска браузера: ${details || 'Неизвестно'}`);
		this.name = 'BrowserLaunchError';
	}
}
