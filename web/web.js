"use strict";

const express = require("express");
const bodyParser = require("body-Parser");
const app = express();

const home = require("./src/routes/home")

app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}./src/views`))

app.use(bodyParser.urlencoded({extended: true}));

app.use ("/", home);


module.exports = app;