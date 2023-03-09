"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl")

router.get("/", ctrl.hello);
router.get("/join", ctrl.join);
router.get("/list", ctrl.list);
router.get("/bbs", ctrl.bbs);
router.get("/main", ctrl.main);
router.get("/login", ctrl.login);


module.exports = router;