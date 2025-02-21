import { Browser, Page, chromium } from 'playwright';

import { IStealthBrowserManager } from '../../interfaces/IStealthBrowserManager.js';

export class StealthBrowserManagerMobile implements IStealthBrowserManager {
	async launch(): Promise<Page> {
		const browser: Browser = await chromium.launch({ headless: false }); // Открываем браузер с UI
		const page: Page = await browser.newPage();
		return page;
	}
	//_mobileDevaceLoader: IDevaceLoader;
}
