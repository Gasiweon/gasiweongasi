"use strict";

const hello = (req, res) =>  {
    res.render("home/index");
};

const join = (req, res) =>  {
    res.render("home/join");
};

const list = (req, res) =>  {
    res.render("home/list");
};

const bbs = (req, res) =>  {
    res.render("home/bbs");
};

const main = (req, res) =>  {
    res.render("home/main");
};

const login = (req, res) =>  {
    res.render("home/login");
};

module.exports = {
    hello,
    join,
    list,
    bbs,
    main,
    login
};