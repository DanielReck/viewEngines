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

// Sub-rota 1: /novidades/mes
router.get('/novidades/mes', function(req, res) {
  res.render('mes', { mes: 'Março', total: 15 });
});

// Sub-rota 2: /novidades/autor
router.get('/novidades/autor', function(req, res) {
  res.render('autor', { autor: 'Stephen King', livros: ['It', 'O Iluminado'] });
});
