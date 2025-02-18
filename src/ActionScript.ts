import { chromium } from "playwright"; // Импортируем Playwright (браузер Chromium)

async function main() {
  // 1️⃣ Запускаем браузер
  const browser = await chromium.launch({ headless: false }); // headless: false → открывает реальный браузер

  // 2️⃣ Создаём новую страницу
  const page = await browser.newPage();

  // 3️⃣ Переходим на сайт Google
  await page.goto("https://www.google.com");

  // 4️⃣ Делаем скриншот страницы и сохраняем в файл
  await page.screenshot({ path: "google.png" });

  // 5️⃣ Закрываем браузер
  await browser.close();
}

// Запускаем функцию
main();
