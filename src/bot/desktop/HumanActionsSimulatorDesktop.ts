import { Page } from 'playwright';

import { IHumanActionsSimulator } from '../../interfaces/IHumanActionsSimulator.js';
import { IBotCommandDTO } from '../../interfaces/dto-interfaces/IBotCommandDTO.js';

export class HumanActionsSimulatorDesktop implements IHumanActionsSimulator {
	private _page: Page;
	dispatch(botCommand: IBotCommandDTO): void {
		this._page.screenshot();
	}
	constructor(page: Page) {
		this._page = page;
		console.log('page ' + page.title());
	}
}
