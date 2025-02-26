import { IBotCommand } from './dto-interfaces/IBotCommandDTO.js';

export interface IBotController {
	dispatch(botCommand: IBotCommand): void;
	shutdown(): Promise<void>;
	initialize(): Promise<void>;
}
