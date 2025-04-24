const entry = require("../models/entries.model"); // Importar el modelo de la BBDD
const entriesModel = require("../models/entries.model");
//getEntries
// if(hay email)
//     busca por mail
// else
//     busca todo
const getAllEntries = async (req, res) => {
  const data = await entriesModel.getAllEntries();
  res.status(200).json(data); // [] con las entries encontradas
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
  getAllEntries,
  getEntries,
  createEntry,

  //deleteEntry, --> DELETE
  //updateEntry --> PUT
};
