const express = require("express");
const entriesController = require("../controllers/authors.controller");
const router = express.Router();

router.get("/", authorController.getAllEntries);
router.put("/", authorController.updateEntry);
router.get("/", authorController.deleteEntry);

module.exports = router;
