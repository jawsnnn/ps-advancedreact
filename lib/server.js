// Will store a server application

const express = require("express");
const config = require("./config");
const serverRender = require("./serverRender");

// Create server
const app = express();
app.set("view engine", "ejs");

// Configure server to serve static files from public folder. URL + filename will be created
app.use(express.static("public"));
app.get("/", function(req, res) {
    // THis is a function so that it can be extended later
    // for different end points easily
    const initialcontent = serverRender();
    res.render("index", {initialcontent});
});

app.listen(config.port, function listenHandler() {
    console.info(`Listening on port ${config.port}`);
});



