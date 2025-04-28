const {
  updateEntryByTitle: modelUpdateEntryByTitle,
  deleteEntryByTitle: modelDeleteEntryByTitle,
} = require("../models/entries.model");

// Update entries by title
const updateEntry = async (req, res) => {
  const oldTitle = req.params.title;
  const { newTitle, content, date, category } = req.body;

  // Validación de campos
  if (!newTitle || !content || !date || !category) {
    return res.status(400).json({ message: "Faltan campos en el body" });
  }

  try {
    const result = await modelUpdateEntryByTitle(
      oldTitle,
      newTitle,
      content,
      category
    );

    if (result.rowCount === 0) {
      return res
        .status(404)
        .json({ message: `No se encontró entry con título '${oldTitle}'` });
    }

    return res.status(200).json({
      message: `Entrada '${oldTitle}' actualizada correctamente`,
      updated: result.rows[0],
    });
  } catch (err) {
    console.error("Error actualizando entry:", err);
    return res
      .status(500)
      .json({ message: "Error interno al modificar la entry" });
  }
};

// Delete entries by title
const deleteEntry = async (req, res) => {
  const title = req.params.title;

  try {
    const result = await modelDeleteEntryByTitle(title);

    if (result.rowCount === 0) {
      return res
        .status(404)
        .json({ message: `No se encontró entry con título '${title}'` });
    }

    return res.status(200).json({
      message: `Entrada '${title}' borrada correctamente`,
      deleted: result.rows[0],
    });
  } catch (err) {
    console.error("Error borrando entry:", err);
    return res
      .status(500)
      .json({ message: "Error interno al borrar la entry" });
  }
};

module.exports = {
  updateEntry,
  deleteEntry,
};
