import { Browser, Page } from 'playwright';

export interface IWebSessionDTO {
	browser: Browser;
	page: Page;
}
