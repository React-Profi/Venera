//import { chromium } from 'playwright';
import { BotControllerDesktop } from '../src/bot/desktop/BotControllerDesktop.js';
import { BotCommand } from '../src/commands/BotCommand.js';
import { IBotController } from '../src/interfaces/IBotController.js';

//✅ Этот код гарантирует, что initialize() вызван перед dispatch().
//✅ Ошибки логируются, и shutdown() вызывается в любом случае. 🚀

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

	const botControllerDesktop: IBotController = new BotControllerDesktop();
	const command = new BotCommand('start', { userId: 123 });

	try {
		await botControllerDesktop.initialize();

		await botControllerDesktop.dispatch(command);
	} catch (error) {
		console.error('Ошибка во время выполнения команд:', error);
	} finally {
		await botControllerDesktop.shutdown();
	}
}

// Запускаем функцию
main();
