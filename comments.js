// create a web server that supports basic CRUD operations on member
// comments.  This server will be used to support the front-end
// commenting system.  The server will support the following routes:
// - GET /comments - returns the list of comments
// - POST /comments - creates a new comment
// - GET /comments/:id - returns a specific comment
// - PUT /comments/:id - updates a specific comment
// - DELETE /comments/:id - deletes a specific comment

const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get('/comments', (req, res) => {
    fs.readFile('./comments.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('An error occurred while attempting to read comments');
            return;
        }

        res.json(JSON.parse(data));
    });
});

app.post('/comments', (req, res) => {
    fs.readFile('./comments.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('An error occurred while attempting to read comments');
            return;
        }

        const comments = JSON.parse(data);

        const newComment = req.body;
        newComment.id = comments.length + 1;
        comments.push(newComment);

        fs.writeFile('./comments.json', JSON.stringify(comments), 'utf8', (err) => {
            if (err) {
                console.error(err);
                res.status(500).send('An error occurred while attempting to write comments');
                return;
            }

            res.json(newComment);
        });
    });
});

app.get('/comments/:id', (req, res) => {
    fs.readFile('./comments.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('An error occurred while attempting to read comments');
            return;
        }

        const comments = JSON.parse(data);

        const id = parseInt(req.params.id);
        const comment = comments.find(c => c.id === id);
        if (!comment) {
            res.status(404).send('Comment not found');
            return;
        }

        res.json(comment);
    });
});

app.put('/comments/:id', (req,