import { Browser, Page, chromium } from 'playwright';

import { BrowserLaunchError } from '../../errors/BrowserLaunchError.js';
import { IStealthBrowserManager } from '../../interfaces/IStealthBrowserManager.js';

export class StealthBrowserManagerDesktop implements IStealthBrowserManager {
	//_desktopDevaceLoader: IDevaceLoader;
	async launch(): Promise<Page> {
		try {
			const browser: Browser = await chromium.launch({ headless: false }); // Открываем браузер с UI
			const page: Page = await browser.newPage();
			return page;
		} catch (error) {
			throw new BrowserLaunchError(
				error instanceof Error ? error.message : 'Ошибка при запуске браузера'
			);
		}
	}
}
