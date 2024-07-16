const express = require("express");
const router = express.Router();

const havoiController = require("../controllers/getdata");
const getmainpageController = require("../controllers/getmainpage");

router.get("/", getmainpageController.getmainpage);

router.get("/:id", havoiController.getdata);

module.exports = router;
