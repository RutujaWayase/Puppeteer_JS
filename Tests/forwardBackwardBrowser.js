//import puppeteer from 'puppeteer';
const puppeteerVar = require('puppeteer');

describe('Forward backward Test', () => {
    it('Forward backward the Browser', async function() {
        //const browser = await puppeteerVar.launch({headless:false})
        //const browser = await puppeteerVar.launch({headless:true})
        const browser = await puppeteerVar.launch({headless:false, slowMo: 500, devtools:true})
        const page = await browser.newPage()
        await page.goto("https://www.google.com")
        //await page.waitForTimeout(3000)
        await page.goto("https://www.blazedemo.com/")
        await page.goBack();
        await page.goForward();
        await browser.close();
        
    })
})