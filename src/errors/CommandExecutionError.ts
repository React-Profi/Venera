import { CustomError } from './CustomError.js';

export class CommandExecutionError extends CustomError {
	constructor(command?: string, details?: string) {
		super(
			`Ошибка выполнения команды "${command || 'Неизвестная'}": ${details || 'Нет деталей'}`
		);
		this.name = 'CommandExecutionError';
	}
}
