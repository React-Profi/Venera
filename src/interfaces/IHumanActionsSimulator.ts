import { IBotCommand } from './dto-interfaces/IBotCommandDTO.js';

export interface IHumanActionsSimulator {
	dispatch(botCommand: IBotCommand): void;
}
