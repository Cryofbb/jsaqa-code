let page;

beforeEach(async () => {
  page = await browser.newPage();
});

afterEach(() => {
  page.close();
});

describe("Netology.ru tests", () => {
  beforeEach(async () => {
    await page.goto("https://netology.ru");
  });
  test("The first test'", async () => {
    const title = await page.title();
    console.log("Page title: " + title);
    const firstLink = await page.$("header a + a");
    // const firstLinkText = await page.$eval(
    //   "header a + a",
    //   (link) => link.textContent
    // );
    await firstLink.click();
    await page.waitForNavigation();
    const title2 = await page.title();
    console.log("Page title: " + title2);
    const pageList = await browser.newPage();
    await pageList.goto("https://netology.ru/navigation");
    await pageList.waitForSelector("h1");
  }, 60000);

  test("The first link text 'Медиа Нетологии'", async () => {
    const actual = await page.$eval("header a + a", (link) => link.textContent);
    expect(actual).toContain("Медиа Нетологии");
  }, 60000);

  test("The first link leads on 'Медиа' page", async () => {
    await page.click("header a + a");
    await page.waitForSelector(".logo__media", {
      visible: true,
    });
    const actual = await page.$eval(".logo__media", (link) => link.textContent);
    expect(actual).toContain("Медиа");
  }, 60000);
});

describe("Homework tests", () => {
  test("Title should be Вакансии в Нетологии – найти работу", async () => {
    await page.goto("https://netology.ru/job");
    expect(await page.title()).toContain("Вакансии в Нетологии – найти работу");
  }, 15000);

  test("Title should be Станьте экспертом Нетологии – присоединиться к команде", async () => {
    await page.goto("https://netology.ru/experts");
    expect(await page.title()).toContain(
      "Станьте экспертом Нетологии – присоединиться к команде"
    );
  }, 15000);

  test("Title should be Партнерская программа и информационная поддержка", async () => {
    await page.goto("https://netology.ru/partners");
    expect(await page.title()).toContain(
      "Партнерская программа и информационная поддержка"
    );
  }, 15000);
  // test("Should fail timeout test", async () => {
  //   await page.goto("https://netology.ru/partners");
  //   expect(await page.title()).toContain(
  //     "Партнерская программа и информационная поддержка"
  //   );
  // }, 1);
});
