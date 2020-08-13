const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();

const sql = mysql.createConnection({
    host: 'projeto.c3janepcihpa.us-east-1.rds.amazonaws.com',
    user: 'root',
    password: 'projetosa88123',
    port: 3306
})

sql.query("use projetosa")

app.use(bodyParser.urlencoded({ extended: false }));

//---------------------------------- Rotas -------------------------------------------->

app.use(express.static(__dirname + '/'));
app.use(express.static(__dirname + '/css'));
app.use(express.static(__dirname + '/script'));


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
});

app.get('/cadastro', (req, res) => {
    res.sendFile(__dirname + '/cadastro.html')
});

app.post('/cadastro', (req, res) => {

    sql.query("insert into cadastro values(?,?,?,?,?,?,?,?,?)",
        [, req.body.nome, req.body.sobreNome, req.body.idade, req.body.fone, req.body.end, req.body.num, req.body.cidade, req.body.estados])

    res.redirect('/cadastro');
});

app.get('/select/:id?', (req, res) => {
    if (!req.params.id) {
        sql.query("select * from cadastro order by id", (err, results, filds) => {
            res.json(results);
        });
    } else {
        sql.query("select * from cadastro where id = ?"[req.params.id], (err, results, filds) => {
            res.json(results);
        });
    }
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

app.listen(8081, () => {
    console.log('Rodando')
});