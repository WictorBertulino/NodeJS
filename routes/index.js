var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/inf', function(req, res, next) {
  res.render('CadastroIp', { title: 'Cadastro de Ip '});
});
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Olá Bem vindo ao sistema', ip:'Nenhum ip Cadastrado' });
});
router.post('/inserir', function(req, res, next) {
  var tmp = req.body.ip;
  res.render('index', { title: 'Cadastro de Ip ',ip:tmp});
  console.log(tmp);
 
});
module.exports = router;
