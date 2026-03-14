var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/perfil', function(req, res, next) {
  res.render('perfil', { 
    nome: 'Daniel', 
    bio: 'Desenvolvedor Full Stack em treinamento.' 
  });
});

module.exports = router;
