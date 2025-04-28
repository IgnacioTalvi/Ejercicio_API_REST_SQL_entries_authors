const express = require("express");
const entriesController = require("../controllers/entries.controller");
const router = express.Router();

// Get all entries
router.get("/", entriesController.getAllEntries);

// Update entries by title
router.put("/:title", entriesController.updateEntry);

// Delete entries by title
router.delete("/:title", entriesController.deleteEntry);

module.exports = router;
