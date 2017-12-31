// module.exports = {
//   index: (req, res) => {
//     res.render('movies/index')
//   }
// };

const Movie = require('../models/movie');

const moviesController = {};

moviesController.index = (req, res) => {
  Movie.findAll()
    .then(movies => {
      res.render('movies/index', { movies: movies });
    })
    .catch(err => {
      res.status(400).json(err);
    });
};

module.exports = moviesController;