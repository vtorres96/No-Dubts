const express = require('express');
const UserController = require('../app/controllers/userController');

const routes = express.Router();

routes.get('/dev-route/', UserController.index);
routes.get('/dev-route/:id', UserController.searchById);
routes.get('/dev-route/deletar/:id', UserController.delete);

// Edituser
routes.post('/edit-user/:id', UserController.update);

// Register user
routes.post('/register-user', UserController.create);

// Login
routes.post('/validate-user', UserController.validate);

// Home
routes.get('/', async (req, res) => {
	await res.render('index.hbs');
});

// Category
routes.get('/categorias', async (req, res) => {
	await res.render('categoria.hbs');
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

routes.get('/perguntas/adicionar', async (req, res) => {
	await res.render('novaPergunta.hbs');
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
