import { IBotCommand } from './IBotCommand.js';

export interface IHumanActionsSimulator {
	dispatch(botCommand: IBotCommand): void;
}
