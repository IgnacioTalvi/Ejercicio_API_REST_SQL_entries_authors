const getAllAuthors = `SELECT 
      *
    FROM authors;`;

const getAuthorByEmail = `SELECT 
      * 
    FROM authors WHERE email = $1`;

const createAuthor = `
    INSERT INTO authors (name, surname, email, image)
    VALUES ($1, $2, $3, $4)
    `;

const deleteAuthor = `DELETE FROM authors
    WHERE email = $1
    RETURNING *`;

// const queries = `SELECT
//       entries.title,
//       entries.content,
//       entries.date,
//       entries.category,
//       authors.name,
//       authors.surname,
//       authors.image
//     FROM entries
//     LEFT JOIN authors ON entries.id_author = authors.id_author
//     ORDER BY entries.title ASC`;

module.exports = {
  getAllAuthors,
  getAuthorByEmail,
  createAuthor,
  deleteAuthor,
};
