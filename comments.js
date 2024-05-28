// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Create a route that sends a GET request to the root URL
app.get('/', (req, res) => {
  res.send('Welcome to the homepage');
});

// Create a route that sends a GET request to the /comments URL
app.get('/comments', (req, res) => {
  res.send('Welcome to the comments page');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// Run the server with node comments.js
// Go to http://localhost:3000 in your browser to see the homepage
// Go to http://localhost:3000/comments in your browser to see the comments page

// Path: comments.js
// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Create a route that sends a GET request to the root URL
app.get('/', (req, res) => {
  res.send('Welcome to the homepage');
});

// Create a route that sends a GET request to the /comments URL
app.get('/comments', (req, res) => {
  res.send('Welcome to the comments page');
});

// Create a route that sends a GET request to the /comments/1 URL
app.get('/comments/1', (req, res) => {
  res.send('Welcome to the first comment');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// Run the server with node comments.js
// Go to http://localhost:3000 in your browser to see the homepage
// Go to http://localhost:3000/comments in your browser to see the comments page
// Go to http://localhost:3000/comments/1 in your browser to see the first comment

// Path: comments.js
// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Create a route that sends a GET request to the root URL
app.get('/', (req, res) => {
  res.send('Welcome to the homepage');
});

// Create a route that sends a GET request to the /comments URL
app.get('/comments', (req, res) => {
  res.send('Welcome to the comments