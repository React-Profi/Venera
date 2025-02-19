import { IBotCommand } from '../../interfaces/IBotCommand.js';
import { IBotController } from '../../interfaces/IBotController.js';

//import { IHumanActionsSimulator } from '../../interfaces/IHumanActionsSimulator.js';
//import { IStealthBrowserManager } from '../../interfaces/IStealthBrowserManager.js';

export class BotControllerDesktop implements IBotController {
	//private _stealthBrowserManager: IStealthBrowserManager;
	//private _humanActionsSimulator: IHumanActionsSimulator;
	/*
  constructor(
    stealthBrowserManager: IStealthBrowserManager,
    humanActionsSimulator: HumanActionsSimulator
  ) {
    this._stealthBrowserManager = stealthBrowserManager;
    this._humanActionsSimulator = humanActionsSimulator;
  }
*/
	constructor() {
		console.log('BotControllerDesktop created');
	}
	dispatch(botCommand: IBotCommand): void {
		// Implementation here
	}
}
