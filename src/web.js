"use strict"

const express = require("express");
const app = express();

const PORT = 3000

const home = require("./bin")

app.set("views", "./views");
app.set("view engine", "ejs");

app.use ("/", home);

app.listen(PORT, () => {
	console.log('localhost:',PORT);
});

module.exports = app;

package.json