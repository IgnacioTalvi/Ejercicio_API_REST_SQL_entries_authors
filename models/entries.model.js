const pool = require("../config/db_pgsql"); // conexión a la BBDD
const queries = require("../queries/entries.queries"); // Queries SQL

// Update entries by title
const updateEntryByTitle = async (oldTitle, newTitle, content, category) => {
  const values = [newTitle, content, category, oldTitle];
  const result = await pool.query(queries.updateEntryByTitle, values);
  return result;
};

// Delete entries by title
const deleteEntryByTitle = async (title) => {
  return await pool.query(deleteSql, [title]);
};

// GET
const getAllEntries = async () => {
  let client, result;
  try {
    client = await pool.connect(); // Espera a abrir conexion
    const data =
      await client.query(`SELECT entries.title, entries.content, entries.date, entries.category, authors.name, authors.surname, authors.image 
from entries
INNER JOIN authors 
ON entries.id_author = authors.id_author`);
    result = data.rows;
  } catch (err) {
    console.log(err);
    throw err;
  } finally {
    client.release();
  }
  return result;
};

// CREATE
const createEntry = async (entry) => {
  const { title, content, email, category } = entry;
  let client, result;
  try {
    client = await pool.connect(); // Espera a abrir conexion
    const data = await client.query(queries.createEntry, [
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

// DELETE
//UPDATE

module.exports = {
  updateEntryByTitle,
  deleteEntryByTitle,
};

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

module.exports = { updateEntryByTitle };
