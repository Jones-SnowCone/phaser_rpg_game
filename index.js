const express = require("express");
const app = express();
const http = require("http");
const path = require("path");
const server = http.createServer(app);

app.use("/static", express.static(__dirname + "/static"));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/index.html"));
});

server.listen(3000, () => {
    console.log("listening on *:3000");
});