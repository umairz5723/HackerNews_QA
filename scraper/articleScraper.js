const { startBrowser } = require("./startBrowser");
const { processNewPosts } = require("./processNewPosts");
const { verifyPosts } = require("./verifyPosts");
const CONFIG = require("./config");


async function sortHackerNewsArticles() {
  // Starts the browser to go to Hacker News
  const { browser, page } = await startBrowser();
  // Process the first 100 posts in the newest section
  const posts = await processNewPosts(page);
  // Close the browser
  await browser.close();
  // Validate that time between posts are in ascending order
  const validated = verifyPosts(posts);

  // Return all the posts and validation boolean to be used in the frontend
  return {
    posts,
    validated,
  };
}

// Call the sortHackerNewsArticle function to begin the scraping process
(async () => {
  console.log("Starting Scraping process");
  await sortHackerNewsArticles();
 
})();

module.exports = { sortHackerNewsArticles };