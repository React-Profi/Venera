import * as fs from 'fs';
import * as path from 'path';

import { IDeviceLoader } from '../../interfaces/IDeviceLoader.js';

export class MobileDeviceLoader implements IDeviceLoader {
	loadDevice(folderPath: string): any {
		try {
			// Проверяем, существует ли папка
			if (!fs.existsSync(folderPath)) {
				throw new Error(`Папка "${folderPath}" не найдена`);
			}

			// Проверяем, является ли путь директорией
			const stats = fs.statSync(folderPath);
			if (!stats.isDirectory()) {
				throw new Error(`"${folderPath}" не является папкой`);
			}

			// Получаем список файлов
			const files = fs.readdirSync(folderPath);

			// Если файлов нет, бросаем ошибку
			if (files.length === 0) {
				throw new Error(`В папке "${folderPath}" нет файлов`);
			}

			// Ищем первый JSON-файл (если нужен другой формат — поменяй фильтр)
			const deviceFile = files.find(file => file.endsWith('.json'));
			if (!deviceFile) {
				throw new Error(`В папке "${folderPath}" нет JSON-файлов`);
			}

			// Полный путь до файла
			const filePath = path.join(folderPath, deviceFile);

			// Читаем и парсим JSON
			const data = fs.readFileSync(filePath, 'utf-8');
			return JSON.parse(data);
		} catch (error) {
			if (error instanceof Error) {
				console.error('Ошибка загрузки устройства:', error.message);
			} else {
				console.error('Ошибка загрузки устройства:', error);
			}
		}
	}
}
