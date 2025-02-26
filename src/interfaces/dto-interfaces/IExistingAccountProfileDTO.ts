import { IDeviceProfileDTO } from './IDeviceProfileDTO.js';

export interface IExistingAccountProfileDTO extends IDeviceProfileDTO {
	cookies: { name: string; value: string; domain: string }[];
	localStorage?: Record<string, string>;
}
