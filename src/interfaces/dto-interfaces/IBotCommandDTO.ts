import { BotCommandType } from '../../enums/BotCommandType.js';

export interface IBotCommandDTO {
	type: BotCommandType;
	payload?: any;
}
