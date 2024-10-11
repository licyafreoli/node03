const apiBaseURL = 'http://localhost:3000'; // URL da API

document.addEventListener('DOMContentLoaded', () => {
    loadFilmes();
    loadClientes();
});

async function loadFilmes() {
    const response = await fetch(`${apiBaseURL}/filmes`);
    const filmes = await response.json();
    const filmesList = document.getElementById('filmes-list');
    filmesList.innerHTML = filmes.map(filme => `<li>${filme.titulo} - ${filme.genero} - R$ ${filme.preco}</li>`).join('');
}

async function loadClientes() {
    const response = await fetch(`${apiBaseURL}/clientes`);
    const clientes = await response.json();
    const clientesList = document.getElementById('clientes-list');
    clientesList.innerHTML = clientes.map(cliente => `<li>${cliente.nome} - ${cliente.cpf}</li>`).join('');
}

document.getElementById('cadastrar-filme').addEventListener('submit', async (event) => {
    event.preventDefault();
    
    const filmeData = {
        titulo: document.getElementById('titulo').value,
        genero: document.getElementById('genero').value,
        preco: parseFloat(document.getElementById('preco').value),
        faixa_etaria: document.getElementById('faixa_etaria').value
    };

    await fetch(`${apiBaseURL}/filmes`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(filmeData)
    });

    loadFilmes();
    event.target.reset();
});

document.getElementById('cadastrar-cliente').addEventListener('submit', async (event) => {
    event.preventDefault();
    
    const clienteData = {
        nome: document.getElementById('nome').value,
        cpf: document.getElementById('cpf').value,
        telefone: document.getElementById('telefone').value,
        idade: parseInt(document.getElementById('idade').value)
    };

    await fetch(`${apiBaseURL}/clientes`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(clienteData)
    });

    loadClientes();
    event.target.reset();
});
