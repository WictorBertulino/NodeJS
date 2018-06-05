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
 inserir();
});


function inserir(){
  var mysql = require('mysql');
  
  var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "node"
  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "INSERT INTO table (id  ,ipConexao) VALUES ( '498751598498165')";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
    });
  });
}
module.exports = router;
