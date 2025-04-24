const express = require("express");
const authorController = require("../controllers/authors.controller");
const router = express.Router();

router.get("/", authorController.getAllAuthors);
router.put("/", authorController.updateAuthor);
router.delete("/", authorController.deleteAuthor);

module.exports = router;
