const { Article } = require("../frontend/src/types/Article.js");
const CONFIG = require("./config");


// Function to extract article times and details using the playwright object page from startBrowser.js
async function extractPosts(page) {

  const times = await page.locator('//span[@class="age"]').allTextContents();
  const titles = await page.locator('span.titleline > a').allTextContents();
  return { times, titles };

}

module.exports = { extractPosts };


// Function to collect the MAX_ARTICLE amount (100)
async function processNewPosts(page) {
  // "articles" array will contain each post as an object
  const articles = [];
  let articleCount = 0;

  while (articleCount < CONFIG.MAX_ARTICLES) {
    // Extract the times and titles of the current pageof posts using helper function
    const { times, titles } = await extractPosts(page);

    // Go through each post in the current extracted set
    for (let i = 0; i < times.length; i++) {
    
      // Stop the collection process when we reach 100 posts
      if (articleCount >= CONFIG.MAX_ARTICLES) break;

      // Extract the time and the title of the post and setup the article object using the title
      const current_time = times[i];
      const title = titles[i];
     
      // Check whether the post was posted minutes ago or hours ago
      const minutesMatch = current_time.match(/(\d+) minute/);
      const hoursMatch = current_time.match(/(\d+) hour/);

      // Create a typescript Object for each article (post)
      const article = new Article(title);
      
      // Set the appropriate estimation for the article object 
      // This will seperate the "minutes ago" posts from the "hours ago" posts
      if (minutesMatch) {
        article.minutes = parseInt(minutesMatch[1], 10);
      }
      if (hoursMatch) {
        article.hours = parseInt(hoursMatch[1], 10);
      }

      // Add the post the array and increment the articleCount
      articles.push(article);
      articleCount += 1;
    }

    // If we havent reached 100 articles yet we need to load more posts
    if (articleCount < CONFIG.MAX_ARTICLES) {
      // Click the "More" button when needed using the XPATH as a locator
      const moreButton = page.locator('//*[@id="hnmain"]/tbody/tr[3]/td/table/tbody/tr[92]/td[2]/a');
      if (await moreButton.count() > 0) {
        await moreButton.click();
        // Wait two seconds for the content to load
        await page.waitForTimeout(2000); 
      }
    }
  }

  return articles;
}

module.exports = { processNewPosts };
