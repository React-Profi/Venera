import { IWebSession } from './dto-interfaces/IWebSessionDTO.js';

export interface IStealthBrowserManager {
	launch(): Promise<IWebSession>;
	close(): void;
}
