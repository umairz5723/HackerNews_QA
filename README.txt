
# QA Wolf Scraper Project

> This project is a full-stack web scraper and automated testing solution designed to validate the order of posts on Hacker News. The backend is powered by Node.js and Playwright for web scraping, while the frontend is built with React to display the results. The project automates the process of checking whether the first 100 posts on the "Newest" section of Hacker News are in the correct order.


## Table of contents

- [QA Wolf Scraper Project](#qa-wolf-scraper-project)
  - [Table of contents](#table-of-contents)
  - [Getting Started](#getting-started)
  - [Installing Dependencies](#installing-dependencies)
- [Usage](#usage) 
	- [Starting The Backend Node.js Server](#starting-the-backend-node.js-server) 
	- [Starting The Frontend React Server](#starting-the-frontend-react-server)



## Getting Started

To get a copy of this project up and running on your local machine, clone the project by running the following command in your terminal: 
```sh 
$ git clone https://github.com/umairz5723/QA-WOLF.git
```
Now that you have the project files change the directory in your terminal to the project folder: 
```sh
$ cd QA-WOLF
```

You should now be in the QA-WOLF folder ready to install the project dependencies.


## Installing Dependencies

Now that you have all the project files, you need to install the dependencies. Run: 
```sh
$ npm install 
``` 
in the terminal.


## Usage

### Starting The Backend Node.js Server
To get the Node server up and running change your terminal directory to be in `backend `folder.
```sh
  $ cd backend
```
Now start the server by running:  
```sh 
$ node server.js
``` 

Running `server.js` will automatically run the scraper `articleScraper.js` and begin the scraping process. With the server running, you can view all the collected article data and validation status by going to `http://localhost:5000/api/posts` in your web browser.

### Starting The Frontend React Server
Ensure that the backend Node server is up and running. 
Open a new terminal window or tab and navigate to the `frontend` folder: 
```sh 
$ cd QA-WOLF\frontend 
```

Run: 
```sh 
npm start
```

This will start the React frontend, which displays the 100 most recent articles, separated into those within the hour and those that are an hour or older.
