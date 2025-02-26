export interface IDeviceProfileDTO {
	// Информация о браузере
	browser: {
		name: string; // Название браузера, например, "chrome" или "firefox"
		userAgent: string; // Реалистичный User-Agent, например, строка актуальной версии Chrome
	};
	// Разрешение экрана в формате "ширинаxвысота", например, "1920x1080"
	screenResolution: string;
	// Информация об операционной системе
	os: {
		name: string; // Название ОС, например, "Windows 10" или "macOS"
		version: string; // Версия ОС, например, "10" или "11"
	};
	// Временная зона, например, "Europe/Moscow"
	timezone: string;
	// Основной язык системы, например, "ru-RU"
	language: string;
	// Количество ядер процессора
	hardwareConcurrency: number;
	// Объём оперативной памяти (в гигабайтах, например)
	deviceMemory: number;
	// Дополнительные данные для формирования «цифрового отпечатка»
	fonts?: string[]; // Список доступных шрифтов
	plugins?: string[]; // Список установленных плагинов
}
