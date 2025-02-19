import { IBotCommand } from '../interfaces/IBotCommand.js';

export class BotCommand implements IBotCommand {
	constructor(
		public command: string,
		public payload?: any
	) {}
}
