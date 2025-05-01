const express = require("express");
const authorController = require("../controllers/authors.controller");
const router = express.Router();

// Return all authors data
router.get("/", authorController.getAllAuthors);

// Return authors by email
router.get("/:email", authorController.getAuthorByEmail);

// Create author
router.post("/", authorController.createAuthor);

// router.get("/", authorController.getAllAuthors);
router.put("/", authorController.updateAuthor);

// router.delete("/", authorController.deleteAuthor);

module.exports = router;
