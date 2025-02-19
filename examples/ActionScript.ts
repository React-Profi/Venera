//import { chromium } from 'playwright';
import { BotControllerMobile } from '../src/bot/mobile/BotControllerMobile.js';
import { BotCommand } from '../src/commands/BotCommand.js';
import { IBotController } from '../src/interfaces/IBotController.js';

// Импортируем Playwright (браузер Chromium)

async function main() {
	/*const browser = await chromium.launch({ headless: false });
	const page = await browser.newPage();
	// Логируем запросы
	page.on('request', request => {
		console.log(`[REQUEST] ${request.method()} ${request.url()}`);
	});

	// Логируем ответы
	console.log('======================');
	page.on('response', response => {
		console.log(`[RESPONSE] ${response.status()} ${response.url()}`);
	});
	await page.goto('https://example.com');
*/
	console.log('===========');
	const botControllerMobile: IBotController = new BotControllerMobile();
	const command = new BotCommand('start', { userId: 123 });
	botControllerMobile.dispatch(command);
}

// Запускаем функцию
main();
