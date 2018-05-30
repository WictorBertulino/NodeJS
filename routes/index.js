var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/inf', function(req, res, next) {
  res.render('CadastroIp', { title: 'Cadastro de Ip '});
});
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Olá Bem vindo ao sistema', Helow:"Cadastre o ip da sua conexão" });
});
router.post('/inserir', function(req, res, next) {
 
});
module.exports = router;
