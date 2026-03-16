var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/generos', function(req, res, next) {
  res.render('generos', { 
    titulo: 'Gêneros Musicais',
    lista: ['Rock', 'Jazz', 'Lo-fi', 'Samba']
  });
});

module.exports = router;

// Sub-rota 1: /generos/rock
router.get('/generos/rock', function(req, res) {
  res.render('rock', { 
    playlist: 'Clássicos do Rock', 
    tracks: ['AC/DC', 'Nirvana', 'Deep Purple'] 
  });
});

// Sub-rota 2: /generos/jazz
router.get('/generos/jazz', function(req, res) {
  res.render('jazz', { 
    playlist: 'Jazz Noturno', 
    tracks: ['Miles Davis', 'John Coltrane'] 
  });
});