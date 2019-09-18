const express = require('express');

const routes = express.Router();

// Category
routes.get('/categorias', async (req, res) => {
  await res.render('categoria.hbs');
});

// Home
routes.get('/', async (req, res) => {
  await res.render('index.hbs');
});

// New Category
routes.get('/categorias/adicionar', async (req, res) => {
  await res.render('novaCategoria.hbs');
});

// New Question
routes.get('/questoes/adicionar', async (req, res) => {
  await res.render('novaPergunta.hbs');
});

// New Sub-category
routes.get('/sub-categorias/adicionar', async (req, res) => {
  await res.render('novaSubCategoria.hbs');
});

// Questions
routes.get('/perguntas', async (req, res) => {
  await res.render('pergunta.hbs');
});

// Privacy Policies
routes.get('/politicas', async (req, res) => {
  await res.render('politicasDePrivacidade.hbs');
});

// Results
routes.get('/resultados', async (req, res) => {
  await res.render('resultados.hbs');
});

// Sub-category
routes.get('/sub-categorias', async (req, res) => {
  await res.render('subCategoria.hbs');
});

module.exports = routes;
