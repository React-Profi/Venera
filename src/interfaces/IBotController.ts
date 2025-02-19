import { IBotCommand } from './IBotCommand.js';

export interface IBotController {
	dispatch(botCommand: IBotCommand): void;
}
