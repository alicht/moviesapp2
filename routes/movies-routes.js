const express = require('express');
const moviesController = require('../controllers/movies-controller');
const moviesRouter = express.Router();

moviesRouter.get('/', moviesController.index)
moviesRouter.get('/:id', moviesController.show)

module.exports = moviesRouter;