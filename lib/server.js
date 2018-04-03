// Will store a server application

const express = require("express");
const config = require("./config");

// Create server
const app = express();
app.set("view engine", "ejs");

// Configure server to serve static files from public folder. URL + filename will be created
app.use(express.static("public"));
app.get("/", function(req, res) {
    res.render("index", {answer: 42});
});

app.listen(config.port, function listenHandler() {
    console.info(`Listening on port ${config.port}`);
});



