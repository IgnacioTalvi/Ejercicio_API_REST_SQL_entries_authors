// Import database model
const entry = require("../models/authors.model");

// GET all authors
const getAllAuthors = async (req, res) => {
  let authors;
  if (req.query.email) {
    entries = await entry.getAllAuthors(req.query.email);
  } else {
    entries = await entry.getAllAuthors();
  }
  res.status(200).json(authors);
};

// GET one author
const getAuthor = async (req, res) => {};

// CREATE new author
const createAuthor = async (req, res) => {
  console.log(req.body);

  try {
    const data = req.body;
    let answer = await new Product(data).save();
    res.status(201).json(answer);
  } catch (error) {
    console.log(`ERROR: ${error.stack}`);
    res.status(400).json({ msj: `ERROR: ${error.stack}` });
  }
};

// GET one author
const updateAuthor = async (req, res) => {};

// GET one author
const deleteAuthor = async (req, res) => {};

module.exports = {
  getAllAuthors,
  getAuthor,
  createAuthor,
  updateAuthor,
  deleteAuthor,
};
