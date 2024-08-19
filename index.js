const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware para servir arquivos estáticos
app.use(express.static('public'));

// Definir rotas básicas
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

const indexRouter = require('./src/routes/index');
app.use('/', indexRouter);
