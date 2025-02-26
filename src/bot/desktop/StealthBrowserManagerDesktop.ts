import { Browser, Page, chromium } from 'playwright';

import { WebSession } from '../../dto/WebSession.js';
import { BrowserLaunchError } from '../../errors/BrowserLaunchError.js';
import { IStealthBrowserManager } from '../../interfaces/IStealthBrowserManager.js';
import { IWebSessionDTO } from '../../interfaces/dto-interfaces/IWebSessionDTO.js';

import { DesktopDeviceLoader } from './DesktopDeviceLoader.js';

// Подключаем загрузчик

export class StealthBrowserManagerDesktop implements IStealthBrowserManager {
	private _desktopDeviceLoader: DesktopDeviceLoader;

	constructor() {
		this._desktopDeviceLoader = new DesktopDeviceLoader(); // Создаём инстанс
	}

	close(): void {}

	async launch(): Promise<IWebSessionDTO> {
		try {
			// Загружаем настройки устройства
			const deviceSettings = this._desktopDeviceLoader.loadDevice('./devices');

			if (!deviceSettings) {
				throw new Error('Ошибка загрузки настроек устройства.');
			}

			// Запускаем браузер с нужными параметрами
			const browser: Browser = await chromium.launch({
				headless: false,
				proxy: deviceSettings.proxy.enabled
					? {
							server: `${deviceSettings.proxy.host}:${deviceSettings.proxy.port}`,
							username: deviceSettings.proxy.username,
							password: deviceSettings.proxy.password
						}
					: undefined
			});

			// Создаём контекст страницы с параметрами устройства
			const context = await browser.newContext({
				userAgent: deviceSettings.browserSettings.userAgent,
				locale: deviceSettings.browserSettings.language,
				viewport: {
					width: parseInt(
						deviceSettings.browserSettings.screenResolution.split('x')[0]
					),
					height: parseInt(
						deviceSettings.browserSettings.screenResolution.split('x')[1]
					)
				}
			});

			const page: Page = await context.newPage();

			return new WebSession(browser, page);
		} catch (error) {
			throw new BrowserLaunchError(
				error instanceof Error ? error.message : 'Ошибка при запуске браузера'
			);
		}
	}
}
