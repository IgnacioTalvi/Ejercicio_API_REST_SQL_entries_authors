const updateEntryByTitle = `
  UPDATE entries
    SET title = $1, content = $2, category = $3
    WHERE title = $4
    RETURNING *
  `;
const deleteEntryByTitle = `
  DELETE FROM entries
    WHERE title = $1
    RETURNING *;  
`;

module.exports = {
  updateEntryByTitle,
  deleteEntryByTitle,
};
