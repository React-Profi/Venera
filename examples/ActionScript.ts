//import { chromium } from 'playwright';
import { BotControllerDesktop } from '../src/bot/desktop/BotControllerDesktop.js';
import { BotCommand } from '../src/dto/BotCommand.js';
import { BotCommandType } from '../src/enums/BotCommandType.js';
import { IBotController } from '../src/interfaces/IBotController.js';
import { IBotCommandDTO } from '../src/interfaces/dto-interfaces/IBotCommandDTO.js';

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
	const click: IBotCommandDTO = new BotCommand(BotCommandType.CLICK, {
		userId: 123
	});
	const account_save: IBotCommandDTO = new BotCommand(
		BotCommandType.ACCOUNT_SAVE
	);
	try {
		await botControllerDesktop.initialize();

		await botControllerDesktop.dispatch(click);

		await botControllerDesktop.dispatch(account_save);
	} catch (error) {
		console.error('Ошибка во время выполнения команд:', error);
	} finally {
		await botControllerDesktop.shutdown();
	}
}

// Запускаем функцию
main();
