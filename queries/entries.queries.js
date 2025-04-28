const updateEntryByTitle = `
  UPDATE entries
    SET title = $1, content = $2, category = $3
    WHERE title = $4
    RETURNING *
  `;
