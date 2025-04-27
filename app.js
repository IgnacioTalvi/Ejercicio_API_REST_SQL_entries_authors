const express = require("express"); // importar express
const app = express(); // crear el servidor --> Objeto de la clase express
const port = 3000; // puerto donde se ejecuta el servidor

app.use(express.json()); // middleware para parsear el body a JSON

const entriesRoutes = require("./routes/entries.routes");
const authorsRoutes = require("./routes/authors.routes");

// GET http://localhost:3000/
app.get("/", (req, res) => {
  res.send("Hello World!");
});

//
app.use("/api/entries", entriesRoutes);
app.use("/api/authors", authorsRoutes);

// Mi app va a estar escuchando en el puerto 3000
// Lanzar el servidor
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
