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

// Delete entries by title

const deleteEntry = async (req, res) => {
  const title = req.params.title;

  try {
    const result = await deleteEntryByTitle(title);

    if (result.rowCount === 0) {
      // no había ninguna fila con ese título
      return res.status(404).json({ message: "Entrada no encontrada" });
    }

    // borró exactamente 1 fila
    return res.status(200).json({
      message: `Entrada '${title}' borrada correctamente`,
      deleted: result.rows[0],
    });
  } catch (err) {
    console.error("Error borrando entrada:", err);
    return res.status(500).json({ message: "Error en el servidor al borrar" });
  }
};

module.exports = {
  updateEntryByTitle,
  deleteEntry,
};
