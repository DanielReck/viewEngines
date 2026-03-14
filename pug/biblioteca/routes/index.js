var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/novidades', function(req, res, next) {
  res.render('novidades', { 
    titulo: 'Lançamentos de 2024',
    livros: [
      {nome: 'O Alquimista', autor: 'Paulo Coelho'},
      {nome: 'Clean Code', autor: 'Robert Martin'}
    ]
  });
});

module.exports = router;
