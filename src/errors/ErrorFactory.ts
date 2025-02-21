export class ErrorFactory {
	static createError(type: string, details?: any): Error {
		switch (type) {
			default:
				return new Error('Неизвестная ошибка');
		}
	}
}
