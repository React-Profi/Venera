import { expect, test } from '@playwright/test';

import { ExistingAccountProfile } from '../../src/dto/ExistingAccountProfile.js';
import { IExistingAccountProfileDTO } from '../../src/interfaces/dto-interfaces/IExistingAccountProfileDTO.js';

test.describe('ExistingAccountProfile', () => {
	test('создает экземпляр с полным набором данных', () => {
		const mockData: IExistingAccountProfileDTO = {
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
			fonts: ['Arial', 'Helvetica'],
			plugins: ['Plugin1', 'Plugin2'],
			cookies: [{ name: 'session', value: 'abc123', domain: '.example.com' }],
			localStorage: { theme: 'dark' }
		};

		const profile: IExistingAccountProfileDTO = new ExistingAccountProfile(
			mockData
		);

		expect(profile.browser).toEqual(mockData.browser);
		expect(profile.screenResolution).toBe(mockData.screenResolution);
		expect(profile.os).toEqual(mockData.os);
		expect(profile.timezone).toBe(mockData.timezone);
		expect(profile.language).toBe(mockData.language);
		expect(profile.hardwareConcurrency).toBe(mockData.hardwareConcurrency);
		expect(profile.deviceMemory).toBe(mockData.deviceMemory);
		expect(profile.fonts).toEqual(mockData.fonts);
		expect(profile.plugins).toEqual(mockData.plugins);
		expect(profile.cookies).toEqual(mockData.cookies);
		expect(profile.localStorage).toEqual(mockData.localStorage);
	});

	test('создает экземпляр без localStorage (опциональных свойство)', () => {
		const mockData: IExistingAccountProfileDTO = {
			browser: {
				name: 'Firefox',
				userAgent: 'Mozilla/5.0 (X11; Linux x86_64)'
			},
			screenResolution: '1366x768',
			os: { name: 'Linux', version: 'Ubuntu' },
			timezone: 'UTC',
			language: 'ru-RU',
			hardwareConcurrency: 4,
			deviceMemory: 8,
			// fonts и plugins могут быть заданы или опущены
			cookies: [{ name: 'session', value: 'def456', domain: '.example.org' }]
			// localStorage не передается
		};

		const profile: IExistingAccountProfileDTO = new ExistingAccountProfile(
			mockData
		);

		expect(profile.browser).toEqual(mockData.browser);
		expect(profile.screenResolution).toBe(mockData.screenResolution);
		expect(profile.os).toEqual(mockData.os);
		expect(profile.timezone).toBe(mockData.timezone);
		expect(profile.language).toBe(mockData.language);
		expect(profile.hardwareConcurrency).toBe(mockData.hardwareConcurrency);
		expect(profile.deviceMemory).toBe(mockData.deviceMemory);
		expect(profile.cookies).toEqual(mockData.cookies);
		expect(profile.localStorage).toBeUndefined();
	});
});
