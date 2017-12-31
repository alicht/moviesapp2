const db = require('../db/config');

const Movie = {};

Movie.findAll = () => {
  return db.query('SELECT * FROM movies ORDER BY id ASC');
};

Movie.findById = id => {
  return db.oneOrNone(`SELECT * FROM movies WHERE id = $1`, [id]);
};

Movie.update = (movie, id) => {
  return db.none(
    `
      UPDATE movies SET
      title = $1,
      description = $2
      WHERE id = $3
    `,
    [movie.title, movie.description, id]
  );
};

module.exports = Movie;