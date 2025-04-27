const pool = require("../config/db_pgsql"); // conexión a la BBDD
const queries = require("../queries/author.queries"); // Queries SQL

// GET
const getAllAuthors = async () => {
  let client, result;
  try {
    client = await pool.connect(); // Espera a abrir conexion
    const data = await client.query(`SELECT * from authors`);
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

// const getAllAuthors = async () => {
//   let client, result;
//   try {
//     client = await pool.connect(); // Espera a abrir conexion
//     const data = await client.query(queries.getAllAuthors);
//     result = data.rows;
//   } catch (err) {
//     console.log(err);
//     throw err;
//   } finally {
//     client.release();
//   }
//   return result;
// };

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

// DELETE
//UPDATE

const entries = {
  getAllAuthors,
  createAuthor,
  getAuthorsByEmail,
  updateAuthor,
  //deleteEntry
  //updateEntry
};

module.exports = entries;

// Pruebas

// getEntriesByEmail("birja@thebridgeschool.es")
// .then(data=>console.log(data))

// getAllEntries()
// .then(data=>console.log(data))

/* let newEntry = {
    title: "Se acabaron las mandarinas de TB",
    content: "Corren rumores de que papa noel tenía un saco vacio y lo llenó",
    email: "guillermu@thebridgeschool.es",
    category: "sucesos"
}

createEntry(newEntry)
    .then(data => console.log(data)) */

// getEntriesByEmail("guillermu@thebridgeschool.es").then((data) =>
//   console.log(data)
// );
