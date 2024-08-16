const express = require("express");
const app = express();
const ml = require("node:https");
const port = 8080;
const path = require("path");
app.use(express.static(path.join(__dirname, "/views")));

app.get('/home', (req, res) => {

    res.render("index.html");
})

app.listen(port, () => {
    console.log("server is listening to port 8080");
})