const express = require("express");
const getDeck = require('./src/getDeck');
const getRandomFiveCards = require('./src/getRandomFiveCards');
const checks = require('./src/checks');
const app = express();

app.get("/", (req, res) => {
    const deck = getDeck();
    res.send(deck);
});

app.get("/get-cards", (req, res) => {
    let fiveCards = getRandomFiveCards(getDeck());
    res.send(fiveCards);
});
app.get("/do-check", (req, res) => {
    let check = checks(getRandomFiveCards(getDeck()));
    res.send(check);
});

app.listen(3000, () => console.log(`Example app listening on port 3000!`));

