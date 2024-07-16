const express = require("express");
const router = express.Router();

const havoiController = require("../controllers/getdata");

router.get("/:id", havoiController.getdata);

module.exports = router;
