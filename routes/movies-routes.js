const express = require('express');
const moviesController = require('../controllers/movies-controller');
const moviesRouter = express.Router();

moviesRouter.get('/', moviesController.index)

module.exports = moviesRouter;