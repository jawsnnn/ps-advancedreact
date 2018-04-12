// Will store a server application

const express = require("express");
const config = require("./config");
const serverRender = require("renderers/server");
const {data} = require("testData");

// Create server
const app = express();
app.set("view engine", "ejs");

// Configure server to serve static files from public folder. URL + filename will be created
app.use(express.static("public"));
app.get("/", async (req, res) => {
    // THis is a function so that it can be extended later
    // for different end points easily
    const initialcontent = await serverRender();
    res.render("index", {initialcontent});
});

// Configure a data endpoint for API
app.get("/data", function(req, res) {
    res.send(data);
});

app.listen(config.port, function listenHandler() {
    console.info(`Listening on port ${config.port}`);
});