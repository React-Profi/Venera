import { Page } from 'playwright';

export interface IStealthBrowserManager {
	launch(): Promise<Page>; //Page;
}
