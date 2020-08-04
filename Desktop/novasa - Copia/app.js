const express = require('express');
const bodyParser = require('body-parser');
const mysql = require ('mysql');

const app = express();

const sql = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306
})

sql.query("use projetosa")

app.use(bodyParser.urlencoded({ extended: false}));

app.use(express.static(__dirname + '/'));
app.use(express.static(__dirname + '/css'));
app.use(express.static(__dirname + '/js'));

app.get ('/index' , (req,res)=>{
    res.sendFile(__dirname + '/index.html');
})

app.get('/cadastro', (req, res)=>{
    res.sendFile(__dirname +'/cadastro.html')
});

app.post('/add-cadastro', (req,res)=>{
    //console.log(req.body.nome);
    //console.log(req.body.sobreNome);
    res.send("Nome: " + req.body.nome + "<br>Sobrenome: " + req.body.sobreNome + "<br>Idade: " + req.body.idade + "<br>Telefone: " + req.body.fone + "<br>Endereço: " + req.body.end + "<br>Nº: " + req.body.num + "<br>Cidade: " + req.body.cidade + "<br><h3>Dados cadastrados com sucesso</h3>");
    sql.query("insert into cadastro values (?,?,?,?,?,?,?,?)", 
    [ ,req.body.nome ,req.body.sobreNome ,req.body.idade ,req.body.fone ,req.body.end ,req.body.num ,req.body.cidade]);

});

app.get('/consulta/:nome?', (req,res)=>{
    sql.query("select * from projetosa",(err, results, filds)=>{
    res.json(results);
    });
    });
    
    app.get('/consulta/:nome?', (req,res)=>{
    sql.query("select * from projetosa where id =?",
    [req.params.id],(err, results, filds)=>{
    var json = results;
    res.send('Nome: ' + json[0].nome);
    });
    });

 
app.get('/email', (req, res) => {
    res.sendFile(__dirname + '/email.html')
});
app.get('/novidades', (req, res) => {
    res.sendFile(__dirname + '/novidades.html')
});
app.get('/produtos', (req, res) => {
    res.sendFile(__dirname + '/produtos.html')
});
app.get('/sobre', (req, res) => {
    res.sendFile(__dirname + '/sobre.html')
});

//------------------------------------------------------------------------------------->

app.listen(8081, function(){ //http://localhost:8081/
    console.log('Servidor ok')
});