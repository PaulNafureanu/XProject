import { Builder } from 'selenium-webdriver';

async function init(){
    let driver = await new Builder().forBrowser('chrome').build();

    await driver.get("https://www.google.com");

    let title = await driver.getTitle();
    console.log(title)

    await driver.manage().setTimeouts({implicit:500});

    driver.quit();
}

init();