const express = require("express");
const getDeck = require('./src/getDeck');
const checks = require('./src/checks');
const app = express();

app.get("/", (req, res) => {
    const result = getDeck();
    res.send(result);
});

app.get("/get-cards", getFiveCards);
app.get("/do-check", checks);

app.listen(3000, () => console.log(`Example app listening on port 3000!`));

