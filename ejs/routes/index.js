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

// Rota pai: /perfil (que você já criou)
// Sub-rota 1: /perfil/detalhes
router.get('/perfil/detalhes', function(req, res) {
  res.render('detalhes', { info: 'Membro desde 2024', status: 'Ativo' });
});

// Sub-rota 2: /perfil/configuracoes
router.get('/perfil/configuracoes', function(req, res) {
  res.render('configuracoes', { tema: 'Escuro' });
});
