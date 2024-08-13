// Function to verify the times in the articles array are in ascending order
function verifyPosts(articles){
    let previousTime = -1;

    // Compare the current article's time to the previous one
    // Convert the hours to minutes to make comparisons easy
    for (const article of articles) {
        let currentTime;

        if (article.minutes) { currentTime = article.minutes;}
        else { currentTime = article.hours * 60;}

        // If it happens that the articles arent in the correct order, return false.
        if (currentTime < previousTime) { return false;}
        previousTime = currentTime;
    }
    return true;
}

module.exports = { verifyPosts }