const pool = require("../config/db_pgsql"); // conexión a la BBDD
const queries = require("../queries/author.queries"); // Queries SQL

// GET
const getAllAuthors = async () => {
  let client, result;
  try {
    client = await pool.connect(); // Espera a abrir conexion
    const data = await client.query(queries.getAllAuthors);
    result = data.rows;
  } catch (err) {
    console.log(err);
    throw err;
  } finally {
    client.release();
  }
  return result;
};

// GET author by email
const getAuthorsByEmail = async (email) => {
  let client, result;
  try {
    client = await pool.connect(); // Espera a abrir conexion
    const data = await client.query(queries.getAuthorByEmail, [email]);
    result = data.rows;
  } catch (err) {
    console.log(err);
    throw err;
  } finally {
    client.release();
  }
  return result;
};

const updateAuthor = async (req, res) => {
  const modifiedEntry = req.body;
  if (
    "name" in modifiedEntry &&
    "surname" in modifiedEntry &&
    "email" in modifiedEntry &&
    "image" in modifiedEntry
  ) {
    try {
      const response = await entry.updateEntry(modifiedEntry);
      res.status(200).json({
        items_updated: response,
        data: modifiedEntry,
      });
    } catch (error) {
      res.status(500).json({ error: "Error en la BBDD" });
    }
  } else {
    res.status(400).json({ error: "Faltan campos en la entrada" });
  }
};

// CREATE
const createAuthor = async (entry) => {
  const { title, content, email, category } = entry;
  let client, result;
  try {
    client = await pool.connect(); // Espera a abrir conexion
    const data = await client.query(queries.createAuthor, [
      title,
      content,
      email,
      category,
    ]);
    result = data.rowCount;
  } catch (err) {
    console.log(err);
    throw err;
  } finally {
    client.release();
  }
  return result;
};

const entries = {
  getAllAuthors,
  createAuthor,
  getAuthorsByEmail,
};

module.exports = entries;
