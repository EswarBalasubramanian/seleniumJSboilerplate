const webdriver = require('selenium-webdriver');
const assert = require("assert");

async function loginTest() {
    // launch the browser
    let driver = await new webdriver.Builder().forBrowser("chrome").build();
    try {
      //navigate to facebook login page
      await driver.get("https://google.com/");
      // Select input elements and fill them out
      await driver.findElement(webdriver.By.xpath("/html/body/div[1]/div[3]/form/div[1]/div[1]/div[1]/div/div[2]/textarea")).sendKeys("dada");
    //   await driver.findElement(By.id("password")).sendKeys("Password@12345");
      // Select login button and invoke click action
      //If login details are correct we wiil be redirected to the welcome page
      await driver.findElement(webdriver.By.xpath("/html/body/div[1]/div[3]/form/div[1]/div[1]/div[2]/div[2]/div[6]/center/input[1]")).submit();
      //On succesful login get page title
      //Check page title, to confirm login was successful
    //   const pageTitle = await driver.getTitle();
      // assert usign node assertion
    //   assert.strictEqual(pageTitle, "Welcomepage");
      //Check if redirect to login page was successfull
    //   await driver.wait(webdriver.until.titleIs("Welcomepage"), 4000);
    } finally {
    //   await driver.quit();
    }
  }
  loginTest();