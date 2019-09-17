const express = require('express');

const app = express();

const server = require('http').Server(app);

server.listen(3333, () => {
  // eslint-disable-next-line no-console
  console.log('Servidor rodando na porta: 3333');
});
