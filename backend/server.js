const express = require('express');
const { sortHackerNewsArticles } = require('../scraper/articleScraper'); 
const cors = require('cors');

const app = express();
const port = 5000;
app.use(cors());


// Define a route to get the posts
app.get('/api/posts', async (req, res) => {
  try {
    // Call the scraper function
    const result = await sortHackerNewsArticles();
    
    // If the validation failed during the scraping process send an error within the json data
    if (result.validated === false) {
      return res.status(400).json({ 
        error: 'Validation failed',
      });
      
    }
    // Otherwise send the result (the data from the scraper)
    res.json(result);
  } catch (error) {
    console.error('Error fetching posts:', error);
    res.status(500).json({ error: 'Failed to fetch posts' });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/api/posts'`);
});
