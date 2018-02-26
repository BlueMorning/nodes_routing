const express     = require('express');
const router      = new express.Router();
const filmRouter  = require('./films');

//router.use('/films', filmRouter);

// Home root
router.get('/', function(req, res) {
  res.json({ data: 'Sup!'});
});

module.exports = router;
