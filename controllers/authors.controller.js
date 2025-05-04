// Import database model
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

// Delete author
const deleteAuthor = async (req, res) => {
  const { email } = req.query;

  if (!email) {
    return res.status(400).json({ message: "Email requerido" });
  }

  try {
    const deleted = await authorsModel.deleteAuthorByEmail(email);
    if (deleted === 0) {
      return res
        .status(404)
        .json({ message: `No se encontró el autor con email ${email}` });
    }
    res.status(200).json({ message: `Se ha borrado ${email}` });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error al borrar el autor" });
  }
};

module.exports = {
  getAllAuthors,
  getAuthorByEmail,
  createAuthor,
  updateAuthor,
  deleteAuthor,
};
