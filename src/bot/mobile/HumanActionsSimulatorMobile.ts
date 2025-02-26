import { IHumanActionsSimulator } from '../../interfaces/IHumanActionsSimulator.js';
import { IBotCommand } from '../../interfaces/dto-interfaces/IBotCommandDTO.js';
import { IWebSession } from '../../interfaces/dto-interfaces/IWebSessionDTO.js';

export class HumanActionsSimulatorMobile implements IHumanActionsSimulator {
	private _webSession: IWebSession;
	dispatch(botCommand: IBotCommand): void {
		this._webSession.page.screenshot();
	}
	constructor(webSession: IWebSession) {
		this._webSession = webSession;
		console.log('page ' + this._webSession.page.title());
	}
}
