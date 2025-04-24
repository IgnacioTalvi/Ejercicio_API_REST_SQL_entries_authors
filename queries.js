const querySelectAllEntriesAuthors = `
  SELECT entries.title, entries.content, entries.date, entries.category, authors.name, authors.surname, authors.image 
  FROM entries
  INNER JOIN authors 
  ON entries.id_author = authors.id_author
`;

const updateAuthor = `
  UPDATE authors 
  SET name = $1, surname = $2, email = $3, image = $4
  WHERE id_author = $5
  RETURNING *
`;

module.exports = {
  querySelectAllEntriesAuthors,
  updateAuthor,
};
