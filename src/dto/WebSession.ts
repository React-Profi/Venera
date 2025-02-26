import { Browser, Page } from 'playwright';

import { IWebSessionDTO } from '../interfaces/dto-interfaces/IWebSessionDTO.js';

export class WebSession implements IWebSessionDTO {
	constructor(
		public browser: Browser,
		public page: Page
	) {}
}
