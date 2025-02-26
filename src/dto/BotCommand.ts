import { BotCommandType } from '../enums/BotCommandType.js';
import { IBotCommandDTO } from '../interfaces/dto-interfaces/IBotCommandDTO.js';

export class BotCommand implements IBotCommandDTO {
	constructor(
		public type: BotCommandType,
		public payload?: any
	) {}
}
