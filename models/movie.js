const db = require('../db/config');

const Movie = {};

Movie.findAll = () => {
  return db.query('SELECT * FROM movies ORDER BY id ASC');
};

Movie.findById = id => {
  return db.oneOrNone(`SELECT * FROM movies WHERE id = $1`, [id]);
};

module.exports = Movie;