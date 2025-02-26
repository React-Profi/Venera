import { expect, test } from '@playwright/test';
import { Browser, Page } from 'playwright';

import { WebSession } from '../../src/dto/WebSession.ts';
import { IWebSessionDTO } from '../../src/interfaces/dto-interfaces/IWebSessionDTO.ts';

test('WebSession should correctly assign properties', async () => {
	const browser = {} as Browser;
	const page = {} as Page;

	const session: IWebSessionDTO = new WebSession(browser, page);

	expect(session.browser).toBe(browser);
	expect(session.page).toBe(page);
});
