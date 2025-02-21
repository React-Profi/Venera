export class CustomError extends Error {
	constructor(message: string) {
		super(message);
		this.name = 'CustomError';
		console.error(`[ЛОГ] Ошибка: ${this.name} - ${this.message}`);
	}
}
