import React, { useEffect, useState } from 'react';
import './App.css'; 

const ArticleList = () => {
  const [minutesArticles, setMinutesArticles] = useState([]);
  const [hoursArticles, setHoursArticles] = useState([]);
  const [error, setError] = useState(null);

  // Retrieve the info from the backend
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/posts');
        if (!response.ok) {
          throw new Error('Validation Failed! The articles in /newest are not in the correct order!');
        }
        const data = await response.json();

        // Separate articles into minutes and hours
        const minutesArticles = data.posts.filter(post => post.minutes !== undefined);
        const hoursArticles = data.posts.filter(post => post.hours !== undefined);

        setMinutesArticles(minutesArticles);
        setHoursArticles(hoursArticles);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchArticles();
  }, []);
  
  // In the event of an error, dont render the actual list, just an h3 of the error
  if (error) {
    return <h3 className="error">{error}</h3>;
  }

  // Render two article unordered lists: one for posts under an hour old and one for posts older than an hour
  return (
    <div className="article-list-container">
      <h2>Articles Posted Within the Last Hour</h2>
      {error && <p className="error">{error}</p>}
      <ul className="article-list">
        {minutesArticles.map((post, index) => (
          <li key={index} className="article-item">
            <div className="article-number">{index + 1}</div>
            <div className="article-content">
              <div className="article-title">{post.title}</div>
              <div className="time-elapsed">{post.minutes === 1 ? '1 minute ago' : `${post.minutes} minutes ago`}</div> 
            </div>
          </li>
        ))}
      </ul>

      <h2>Articles Posted Over an Hour Ago</h2>
      <ul className="article-list">
        {hoursArticles.map((post, index) => (
          <li key={index} className="article-item">
            <div className="article-number">{minutesArticles.length + index + 1}</div>
            <div className="article-content">
              <div className="article-title">{post.title}</div>
              <div className="time-elapsed">{post.hours === 1 ? '1 hour ago' : `${post.hours} hours ago`}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArticleList;