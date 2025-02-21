import { Page } from 'playwright';

import { IBotCommand } from '../../interfaces/IBotCommand.js';
import { IHumanActionsSimulator } from '../../interfaces/IHumanActionsSimulator.js';

export class HumanActionsSimulatorDesktop implements IHumanActionsSimulator {
	private _page: Page;
	dispatch(botCommand: IBotCommand): void {
		this._page.screenshot();
	}
	constructor(page: Page) {
		this._page = page;
	}
}
