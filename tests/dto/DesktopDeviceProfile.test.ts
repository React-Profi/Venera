import { expect, test } from '@playwright/test';

import { DesktopDeviceProfile } from '../../src/dto/DesktopDeviceProfile.js';
import { IDeviceProfileDTO } from '../../src/interfaces/dto-interfaces/IDeviceProfileDTO.js';

test.describe('DesktopDeviceProfile', () => {
	test('создает экземпляр с полным набором данных', () => {
		const mockData: IDeviceProfileDTO = {
			browser: {
				name: 'Chrome',
				userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
			},
			screenResolution: '1920x1080',
			os: { name: 'Windows', version: '10' },
			timezone: 'UTC+3',
			language: 'en-US',
			hardwareConcurrency: 8,
			deviceMemory: 16,
			fonts: ['Arial', 'Verdana'],
			plugins: ['Plugin1', 'Plugin2']
		};

		const profile: IDeviceProfileDTO = new DesktopDeviceProfile(mockData);

		expect(profile.browser).toEqual({
			name: 'Chrome',
			userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
		});
		expect(profile.screenResolution).toBe('1920x1080');
		expect(profile.os).toEqual({ name: 'Windows', version: '10' });
		expect(profile.timezone).toBe('UTC+3');
		expect(profile.language).toBe('en-US');
		expect(profile.hardwareConcurrency).toBe(8);
		expect(profile.deviceMemory).toBe(16);
		expect(profile.fonts).toEqual(['Arial', 'Verdana']);
		expect(profile.plugins).toEqual(['Plugin1', 'Plugin2']);
	});

	test('создает экземпляр и корректно обрабатывает отсутствие опциональных свойств', () => {
		const mockData: IDeviceProfileDTO = {
			browser: {
				name: 'Firefox',
				userAgent: 'Mozilla/5.0 (X11; Linux x86_64)'
			},
			screenResolution: '1366x768',
			os: { name: 'Linux', version: 'Ubuntu' },
			timezone: 'UTC',
			language: 'ru-RU',
			hardwareConcurrency: 4,
			deviceMemory: 8
			// fonts и plugins не передаются
		};

		const profile: IDeviceProfileDTO = new DesktopDeviceProfile(mockData);

		expect(profile.browser).toEqual({
			name: 'Firefox',
			userAgent: 'Mozilla/5.0 (X11; Linux x86_64)'
		});
		expect(profile.screenResolution).toBe('1366x768');
		expect(profile.os).toEqual({ name: 'Linux', version: 'Ubuntu' });
		expect(profile.timezone).toBe('UTC');
		expect(profile.language).toBe('ru-RU');
		expect(profile.hardwareConcurrency).toBe(4);
		expect(profile.deviceMemory).toBe(8);
		expect(profile.fonts).toBeUndefined();
		expect(profile.plugins).toBeUndefined();
	});
});
