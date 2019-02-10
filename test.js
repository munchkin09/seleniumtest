const {Builder, By, Key, until} = require('selenium-webdriver');

(async function example() {
    let driver = await new Builder().forBrowser('firefox').build();
    try {
        await driver.get('http://r.yatt.io');
        await driver.findElement(By.name('q')).sendKeys('cheese', Key.RETURN);
    
    } catch(e) {
        console.log(e);
        
    }
    finally {
        await driver.quit();
    }
})();