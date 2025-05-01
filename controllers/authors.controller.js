// Import database model
const author = require("../models/authors.model");
const authorsModel = require("../models/authors.model");
const entriesModel = require("../models/entries.model");

// Returns all authors
const getAllAuthors = async (req, res) => {
  const data = await authorsModel.getAllAuthors();
  res.status(200).json(data); // [] con las entries encontradas
};

// Get author by email search
const getAuthorByEmail = async (req, res) => {
  let entries;
  if (req.query.email) {
    entries = await author.getEntriesByEmail(req.query.email);
  } else {
    entries = await author.getAllEntries();
  }
  res.status(200).json(entries); // [] con las entries encontradas
};

// Crear autor
const createAuthor = async (req, res) => {
  const { name, surname, email, image } = req.body;

  try {
    await createAuthor(name, surname, email, image);
    res.status(201).send({ message: `Usuario creado: ${email}` });
  } catch (err) {
    console.error(err);
    res.status(400).send({ message: "Error al crear el autor" });
  }
};

// Modificar autor
const updateAuthor = async (req, res) => {
  const { name, surname, email, image } = req.body;

  try {
    const result = await updateAuthor(name, surname, email, image);
    if (result.rowCount === 0) {
      return res.status(404).send({ message: "Autor no encontrado" });
    }
    res.status(200).send({ message: `Usuario actualizado: ${email}` });
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: "Error al actualizar autor" });
  }
};

// DELETE one author
const deleteAuthor = (req, res) => {
  console.log(req.query);
  // Lógica para borrar de la bbdd por título y autor
  // DELETE FROM books WHERE title = req.query.title AND author = req.query.author
  res.send(`Libro borrado: ${req.query.title} - ${req.query.author}`);
};

module.exports = {
  getAllAuthors,
  getAuthorByEmail,
  createAuthor,
  updateAuthor,
  deleteAuthor,
};
