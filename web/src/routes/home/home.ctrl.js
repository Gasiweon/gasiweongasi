"use strict";

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
        const id = req.body.id,
        password = req.body.password



        if (users.id.includes(id)) {
            const idx = users.id.index0f(id);
            if(users.password[idx] === password) {
                return res.json({
                seccess: true,
            });
        }
    }
    return res.json({
        success: false,
        msg: "로그인에 실패하셨습니다."
    });
    }
}
module.exports = {
    output,
    process
};