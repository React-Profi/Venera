import { IBotCommand } from './IBotCommand.js';

export interface IBotController {
	dispatch(botCommand: IBotCommand): void;
	shutdown(): Promise<void>;
	initialize(): Promise<void>;
}
