"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl")

router.get("/", ctrl.output.home);
router.get("/join", ctrl.output.join);
router.get("/list", ctrl.output.list);
router.get("/bbs", ctrl.output.bbs);
router.get("/main", ctrl.output.main);
router.get("/login", ctrl.output.login);
router.post("/login", ctrl.process.login);


module.exports = router;