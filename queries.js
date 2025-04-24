const querySelectAllEntriesAuthors = `
  SELECT entries.title, entries.content, entries.date, entries.category, authors.name, authors.surname, authors.image 
  FROM entries
  INNER JOIN authors 
  ON entries.id_author = authors.id_author
`;

const updateAuthor = `
 UPDATE entries
SET 
id_entry = $1,
title = $2,
content = $3,
date = $4,
id_author = $5,
category = $6
WHERE title = $7
`;

module.exports = {
  querySelectAllEntriesAuthors,
  updateAuthor,
};
