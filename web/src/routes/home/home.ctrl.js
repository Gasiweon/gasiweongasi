"use strict";

const User = require("../../models/User");

const output = {
    home: (req, res) =>  {
        res.render("home/index");
    },
    
    join: (req, res) =>  {
        res.render("home/join");
    },
    
    list: (req, res) =>  {
        res.render("home/list");
    },
    
    bbs: (req, res) =>  {
        res.render("home/bbs");
    },
    
    main: (req, res) =>  {
        res.render("home/main");
    },
    
    login: (req, res) => {
        res.render("home/login");
    },
}

const process = {
    login: (req, res) => {
        const user = new User(req.body)
        const response = user.login();
        return red.json(response);
    },
};
module.exports = {
    output,
    process
};