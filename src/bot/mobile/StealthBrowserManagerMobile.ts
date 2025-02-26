import { Browser, Page, chromium } from 'playwright';

import { WebSession } from '../../dto/WebSession.js';
import { IStealthBrowserManager } from '../../interfaces/IStealthBrowserManager.js';
import { IWebSession } from '../../interfaces/dto-interfaces/IWebSessionDTO.js';

//import { IDevaceLoader } from '../../interfaces/IDevaceLoader.js';

export class StealthBrowserManagerMobile implements IStealthBrowserManager {
	close(): void {}
	async launch(): Promise<IWebSession> {
		const browser: Browser = await chromium.launch({ headless: false }); // Открываем браузер с UI
		const page: Page = await browser.newPage();
		return new WebSession(browser, page);
	}
	//_mobileDevaceLoader: IDevaceLoader;
}
