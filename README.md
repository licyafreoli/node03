# Movie Rental System

This project is a simple movie rental system built with Node.js, Express, and SQLite. It includes functionalities for managing movies, customers, and rentals.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Database Structure](#database-structure)
- [License](#license)

## Features

- View all movies
- View all customers
- Add new movies
- Add new customers
- Rent movies

## Technologies Used

- Node.js
- Express
- SQLite
- HTML
- CSS
- JavaScript

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/movie-rental-system.git
   cd movie-rental-system

   Install dependencies:

bash
Copiar código
npm install
Run the server:

bash
Copiar código
node index.js
Usage
Open your browser and navigate to http://localhost:3000 to access the application. You will see the interface for managing movies and customers.

API Endpoints
GET /filmes: Retrieve all movies.
GET /clientes: Retrieve all customers.
POST /filmes: Add a new movie.
POST /clientes: Add a new customer.
POST /alugueis: Rent a movie.


FLUSH PRIVILEGES;  -- Para garantir que as permissões sejam recarregadas
SET PASSWORD FOR 'root'@'localhost' = PASSWORD('Mysql102030');




npm init -y
npm install express mysql2 cors
node index.js


const mysql = require('mysql2/promise')

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'Mysql102030',
  database: 'sistema',
})

module.exports = pool
