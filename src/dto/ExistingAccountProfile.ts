import { IExistingAccountProfileDTO } from '../interfaces/dto-interfaces/IExistingAccountProfileDTO.js';

import { DesktopDeviceProfile } from './DesktopDeviceProfile.js';

export class ExistingAccountProfile
	extends DesktopDeviceProfile
	implements IExistingAccountProfileDTO
{
	cookies: { name: string; value: string; domain: string }[];
	localStorage?: Record<string, string>;

	constructor(data: IExistingAccountProfileDTO) {
		super(data);
		this.cookies = data.cookies;
		this.localStorage = data.localStorage;
	}
}
