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
