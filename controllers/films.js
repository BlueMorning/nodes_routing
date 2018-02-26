const express     = require('express');
const filmRouter  = new express.Router();
const UI          = require('../client/src/views/ui');

//since we don't have a database we'll use our front end models at the moment
const films     = require('../client/src/models/films')();
const Film      = require('../client/src/models/film');
const Review    = require('../client/src/models/review');


// Get all the films
// localhost:3000/films
filmRouter.get('/', function(req, res){
  res.json({films: films});
})

// Get a specific film
// localhost:3000/films/0
filmRouter.get('/:id', function(req, res){
  res.json({films: films[req.params.id]});
})

// Create a new film
// localhost:3000/films
filmRouter.post('/', function(req, res){
  films.push(req.body.film);
  res.json({films: films});
})





module.exports  = filmRouter;
