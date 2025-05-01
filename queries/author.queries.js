const getAllAuthors = `SELECT 
      *
    FROM authors;`;

const getAuthorByEmail = `SELECT 
      * 
    FROM authors WHERE email = $1`;

const queries = `SELECT 
      entries.title, 
      entries.content, 
      entries.date, 
      entries.category,
      authors.name, 
      authors.surname, 
      authors.image
    FROM entries
    LEFT JOIN authors ON entries.id_author = authors.id_author
    ORDER BY entries.title ASC`;

module.exports = { getAllAuthors, getAuthorByEmail };
