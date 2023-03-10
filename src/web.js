"use strict"

const express = require("express");
const app = express();

const PORT = 3000

const home = require("./home")

app.set("views", "./views");
app.set("view engine", "ejs");
app.use(express.staticd(`${__dirname}/src/public/js`))

app.use ("/", home);

app.listen(PORT, () => {
	console.log('localhost:',PORT);
});

module.exports = app;