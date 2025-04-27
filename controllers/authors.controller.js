// Import database model
const author = require("../models/authors.model");
const authorsModel = require("../models/authors.model");

// // GET all authors
// const getAllAuthors = async (req, res) => {
//   let authors;
//   if (req.query.email) {
//     entries = await entry.getAllAuthors(req.query.email);
//   } else {
//     entries = await entry.getAllAuthors();
//   }
//   res.status(200).json(authors);
// };

//
const getAllAuthors = async (req, res) => {
  const data = await authorsModel.getAllAuthors();
  res.status(200).json(data); // [] con las entries encontradas
};

const getAuthors = async (req, res) => {
  let entries;
  if (req.query.email) {
    entries = await author.getEntriesByEmail(req.query.email);
  } else {
    entries = await author.getAllEntries();
  }
  res.status(200).json(entries); // [] con las entries encontradas
};

// // CREATE new author
// const createAuthor = async (req, res) => {
//   console.log(req.body);

//   try {
//     const data = req.body;
//     let answer = await new Product(data).save();
//     res.status(201).json(answer);
//   } catch (error) {
//     console.log(`ERROR: ${error.stack}`);
//     res.status(400).json({ msj: `ERROR: ${error.stack}` });
//   }
// };

// GET one author
const updateAuthor = (req, res) => {
  console.log(req.body); // por body se recibe el libro a editar
  if (req.body.title && req.body.author) {
    // Lógica para editar el libro en la BBDD
    // UPDATE books SET title = req.body.title, author = req.body.author WHERE id = req.body.id
    //..

    let book = {
      title: "Don Quijote de la Mancha",
      author: "Miguel de Cervantes",
      pages: 2000,
      year: 1550,
      description: "en un lugar de la mancha...",
    };

    let newBook = { ...book, ...req.body }; // Actualizar el libro con los nuevos datos

    res.status(200).json({
      success: true,
      action: "update",
      title: req.body.title,
      id: Math.floor(Math.random() * (10000 - 1) + 1),
      data: newBook,
    });
  } else {
    res.status(400).send("Petición incorrecta");
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
  getAuthors,
  updateAuthor,
  deleteAuthor,
};
