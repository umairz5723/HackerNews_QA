const { chromium } = require("playwright");
const CONFIG = require("./config");

async function startBrowser() {
  
    // Launch browser with headless = true so we dont have to see the browser
  const browser = await chromium.launch({ headless: true}); 
  const context = await browser.newContext();
  const page = await context.newPage();

  // Go to Hacker News
  await page.goto(CONFIG.HACKER_NEWS_URL);
  return { browser, page };
  }

module.exports = { startBrowser};