const { chromium } = require("playwright");
const usr = require("../playwright/user");
const { test, expect } = require("@playwright/test");

(async () => {
  const browser = await chromium.launch({
    headless: false,
    slowMo: 2000,
    devtools: false,
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://netology.ru/");
  await page.screenshot({ path: "Screenshots/CorrectPass1.png" });
  await page.click("text=Войти");
  await page.screenshot({ path: "Screenshots/CorrectPass2.png" });
  await page.fill('[placeholder="Email"]', usr.email);
  await page.fill('[placeholder="Пароль"]', usr.pass);
  await page.click("text=Войти");
  await page.screenshot({ path: "Screenshots/CorrectPass3.png" });
  await expect(page.locator("text=Мои курсы и профессии")).toBeVisible();
  await page.screenshot({ path: "Screenshots/CorrectPass4.png" });
  // ---------------------
  await context.close();
  await browser.close();
})();

(async () => {
  const browser = await chromium.launch({
    headless: false,
    slowMo: 2000,
    devtools: false,
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://netology.ru/");
  await page.screenshot({ path: "Screenshots/WrongPass1.png" });
  await page.click("text=Войти");
  await page.screenshot({ path: "Screenshots/WrongPass2.png" });
  await page.fill('[placeholder="Email"]', "email@email.ru");
  await page.fill('[placeholder="Пароль"]', "Password");
  await page.click("text=Войти");
  await page.screenshot({ path: "Screenshots/WrongPass3.png" });
  await expect(
    page.locator("text=Вы ввели неправильно логин или пароль")
  ).toBeVisible();
  // ---------------------
  await context.close();
  await browser.close();
})();
