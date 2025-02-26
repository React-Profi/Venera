import { IDeviceProfileDTO } from '../interfaces/dto-interfaces/IDeviceProfileDTO.js';

export class DesktopDeviceProfile implements IDeviceProfileDTO {
	browser: { name: string; userAgent: string };
	screenResolution: string;
	os: { name: string; version: string };
	timezone: string;
	language: string;
	hardwareConcurrency: number;
	deviceMemory: number;
	fonts?: string[];
	plugins?: string[];

	constructor(data: IDeviceProfileDTO) {
		this.browser = data.browser;
		this.screenResolution = data.screenResolution;
		this.os = data.os;
		this.timezone = data.timezone;
		this.language = data.language;
		this.hardwareConcurrency = data.hardwareConcurrency;
		this.deviceMemory = data.deviceMemory;
		this.fonts = data.fonts;
		this.plugins = data.plugins;
	}
}
