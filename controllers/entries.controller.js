const entry = require("../models/entries.model"); // Importar el modelo de la BBDD
const entriesModel = require("../models/entries.model");

// Update entries by title
const updateEntryByTitle = async (req, res) => {
  const newEntry = req.body; // {title,content,email,category}
  if (
    "title" in newEntry &&
    "content" in newEntry &&
    "date" in newEntry &&
    "category" in newEntry &&
    "old_title" in newEntry
  ) {
    try {
      const response = await entry.updateEntryByTitle(newEntry);
      res.status(201).json({
        items_created: response,
        data: newEntry,
      });
    } catch (error) {
      res.status(500).json({ error: "Error en la BBDD" });
    }
  } else {
    res.status(400).json({ error: "Faltan campos en la entrada" });
  }
};

// GET http://localhost:3000/entries --> ALL
// GET http://localhost:3000/entries?email=hola@gmail.com --> por email
const getEntries = async (req, res) => {
  let entries;
  if (req.query.email) {
    entries = await entry.getEntriesByEmail(req.query.email);
  } else {
    entries = await entry.getAllEntries();
  }
  res.status(200).json(entries); // [] con las entries encontradas
};

//createEntry
// POST http://localhost:3000/api/entries
// let newEntry = {
//     title:"noticia desde Node",
//     content:"va a triunfar esto2",
//     email:"alejandru@thebridgeschool.es",
//     category:"sucesos"}

const updateEntry = (req, res) => {
  console.log(req.body); // por body se recibe el libro a editar
  try {
    //llamar al modelo entries
    //pasarle criterio de busqueda(titulo antiguo) + datos actualizados

    //devolver resultado por json

    res.status(200).json();
  } catch (error) {
    res.status(400).send(error);
  }
};

// Crear entry por email
const createEntry = async (req, res) => {
  const newEntry = req.body; // {title,content,email,category}
  const response = await entry.createEntry(newEntry);
  res.status(201).json({
    items_created: response,
    data: newEntry,
  });
};

module.exports = {
  updateEntryByTitle,
  getEntries,
  createEntry,
  updateEntry,

  //deleteEntry, --> DELETE
  //updateEntry --> PUT
};
