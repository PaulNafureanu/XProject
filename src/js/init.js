"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const selenium_webdriver_1 = require("selenium-webdriver");
async function init() {
    let driver = await new selenium_webdriver_1.Builder().forBrowser('chrome').build();
    await driver.get("https://www.google.com");
    let title = await driver.getTitle();
    console.log(title);
    await driver.manage().setTimeouts({ implicit: 500 });
    driver.quit();
}
init();
//# sourceMappingURL=init.js.map