const express = require('express');
const moviesController = require('../controllers/movies-controller');
const moviesRouter = express.Router();

moviesRouter.get('/', moviesController.index)
moviesRouter.get('/:id', moviesController.show)
moviesRouter.get('/:id/edit', moviesController.edit)

moviesRouter.put('/:id', moviesController.update)

module.exports = moviesRouter;