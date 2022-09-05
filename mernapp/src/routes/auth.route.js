const express = require("express");
const router = express.Router();

const empCtrl = require("../controllers/emp.controller");

router.post("/register", empCtrl.register);
router.post("/login", empCtrl.login);

module.exports = router;
