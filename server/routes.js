const express = require("express");
const getDeck = require('./src/getDeck');
const checks = require('./checks');
const app = express();

app.get("/", (req, res) => {
    const result = getDeck();
    res.send(result);
});

app.get("/get-cards", getFiveCards);
app.get("/do-check", checks);
