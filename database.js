const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./locadora.db');

db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS filmes (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        titulo VARCHAR(100),
        genero VARCHAR(100),
        preco REAL NOT NULL,
        faixa_etaria TEXT NOT NULL
    )`);

    db.run(`CREATE TABLE IF NOT EXISTS clientes (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome VARCHAR(100),
        cpf VARCHAR(11),
        telefone TEXT NOT NULL,
        idade INTEGER NOT NULL
    )`);

    db.run(`CREATE TABLE IF NOT EXISTS alugueis (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        data_aluguel VARCHAR(100),
        id_filme INTEGER NOT NULL,
        id_cliente INTEGER NOT NULL,
        FOREIGN KEY (id_filme) REFERENCES filmes(id),
        FOREIGN KEY (id_cliente) REFERENCES clientes(id)
    )`);

    db.run(`INSERT INTO filmes (titulo, genero, preco, faixa_etaria) VALUES
        ('O Senhor dos Anéis: A Sociedade do Anel', 'Fantasia', 7.99, '12 anos'),
        ('O Rei Leão', 'Animação', 5.99, 'Livre'),
        ('Matrix', 'Ficção Científica', 6.99, '16 anos'),
        ('Harry Potter e a Pedra Filosofal', 'Fantasia', 8.99, '10 anos'),
        ('Vingadores: Ultimato', 'Ação', 9.99, '12 anos')
    `);

    db.run(`INSERT INTO clientes (nome, cpf, telefone, idade) VALUES
        ('João da Silva', '12345678900', '11-98765-4321', 30),
        ('Maria Oliveira', '98765432100', '11-91234-5678', 25),
        ('Carlos Souza', '55544433322', '11-99876-5432', 40),
        ('Ana Santos', '22233344455', '11-96543-2109', 22),
        ('Lucas Almeida', '11122233344', '11-93456-7890', 35)
    `);

    db.run(`INSERT INTO alugueis (data_aluguel, id_filme, id_cliente) VALUES
        ('2024-10-01', 1, 1),
        ('2024-10-02', 2, 2),
        ('2024-10-03', 3, 3),
        ('2024-10-04', 4, 4),
        ('2024-10-05', 5, 5)
    `);
});

module.exports = db;
