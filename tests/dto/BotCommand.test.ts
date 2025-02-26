import { expect, test } from '@playwright/test';

import { BotCommand } from '../../src/dto/BotCommand.js';
import { BotCommandType } from '../../src/enums/BotCommandType.js';
import { IBotCommandDTO } from '../../src/interfaces/dto-interfaces/IBotCommandDTO.js';

test('BotCommand should correctly assign properties', async () => {
	const type = BotCommandType.CLICK;
	const payload = { userId: 123 };

	const botCommand: IBotCommandDTO = new BotCommand(type, payload);

	expect(botCommand.type).toBe(type);
	expect(botCommand.payload).toBe(payload);
});

test('BotCommand should handle undefined payload', async () => {
	const type = BotCommandType.ACCOUNT_SAVE;

	const botCommand: IBotCommandDTO = new BotCommand(type);

	expect(botCommand.type).toBe(type);
	expect(botCommand.payload).toBeUndefined();
});
