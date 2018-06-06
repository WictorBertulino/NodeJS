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
  var mysql = require('mysql');
  
  var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "nodetst"
  });

  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "INSERT INTO teste1 (ipconexao) VALUES ("+ tmp +")";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
    });
  });




});
module.exports = router;
