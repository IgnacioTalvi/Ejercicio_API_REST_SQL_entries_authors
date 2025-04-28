const express = require("express");
const entriesController = require("../controllers/entries.controller");
const router = express.Router();

// Get all entries
// router.get("/", entriesController.getAllEntries);

// Update entries by title
router.put("/:title", entriesController.updateEntry);

// router.get("/", entriesController.deleteEntry);

module.exports = router;
