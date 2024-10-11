const express = require('express');
const bodyParser = require('body-parser');
const db = require('./database');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.get('/filmes', (req, res) => {
    db.all('SELECT * FROM filmes', [], (err, rows) => {
        if (err) {
            res.status(500).send(err.message);
        } else {
            res.json(rows);
        }
    });
});

app.get('/clientes', (req, res) => {
    db.all('SELECT * FROM clientes', [], (err, rows) => {
        if (err) {
            res.status(500).send(err.message);
        } else {
            res.json(rows);
        }
    });
});

app.post('/filmes', (req, res) => {
    const { titulo, genero, preco, faixa_etaria } = req.body;
    db.run('INSERT INTO filmes (titulo, genero, preco, faixa_etaria) VALUES (?, ?, ?, ?)', [titulo, genero, preco, faixa_etaria], function(err) {
        if (err) {
            res.status(500).send(err.message);
        } else {
            res.status(201).json({ id: this.lastID });
        }
    });
});

app.post('/clientes', (req, res) => {
    const { nome, cpf, telefone, idade } = req.body;
    db.run('INSERT INTO clientes (nome, cpf, telefone, idade) VALUES (?, ?, ?, ?)', [nome, cpf, telefone, idade], function(err) {
        if (err) {
            res.status(500).send(err.message);
        } else {
            res.status(201).json({ id: this.lastID });
        }
    });
});

app.post('/alugueis', (req, res) => {
    const { data_aluguel, id_filme, id_cliente } = req.body;
    db.run('INSERT INTO alugueis (data_aluguel, id_filme, id_cliente) VALUES (?, ?, ?)', [data_aluguel, id_filme, id_cliente], function(err) {
        if (err) {
            res.status(500).send(err.message);
        } else {
            res.status(201).json({ id: this.lastID });
        }
    });
});

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
