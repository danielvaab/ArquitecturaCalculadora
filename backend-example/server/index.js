
const express = require("express");
var cors = require('cors');
const app = express();
var http = require('http');

var PORT = process.env.PORT || 8080;
var path = require('path');

app.use(cors());
app.use(express.json());

//Routes
app.use(require("./routes/main.routes"));
app.use(express.static(path.join(__dirname, '../client')));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/index.html'));
});


var server = http.createServer(app);
server.listen(PORT)

