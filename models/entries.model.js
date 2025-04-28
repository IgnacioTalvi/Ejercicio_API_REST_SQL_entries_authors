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
