const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const rotaProdutos = require('./routes/produtos');

app.use('/produtos', rotaProdutos);


app.use(bodyParser.urlencoded({ extended: false})); // apenas dados simples
app.use(bodyParser.json()); // json na entrada do body  

app.use((req, res, next) => {
    const erro = new Error('Não encontrado');
    erro.status = 404;
    next(erro);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500)
    return res.send({
        erro: {
            mensagem: error.message
        }
    })
});

module.exports = app;