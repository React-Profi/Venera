import { IBotCommand } from '../../interfaces/IBotCommand.js';
import { IBotController } from '../../interfaces/IBotController.js';

//import { IHumanActionsSimulator } from '../../interfaces/IHumanActionsSimulator.js';
//import { IStealthBrowserManager } from '../../interfaces/IStealthBrowserManager.js';

export class BotControllerMobile implements IBotController {
	//private _stealthBrowserManager: IStealthBrowserManager;
	//private _humanActionsSimulator: IHumanActionsSimulator;
	/*
  constructor(
    stealthBrowserManagerMobile: IStealthBrowserManagerMobile,
    humanActionsSimulatorMobile: HumanActionsSimulatorMobile
  ) {
    this._stealthBrowserManagerMobile = stealthBrowserManagerDesktop;
    this._humanActionsSimulatorMobile = humanActionsSimulatorMobile;
  }
*/
	constructor() {
		console.log('BotControllerMobile created!');
	}
	dispatch(botCommand: IBotCommand): void {
		// Implementation here
	}
}
