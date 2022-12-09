const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Usando o GET dentro da rota de produtos'
    });
});

router.post('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Usando o POST dentro da rota de produtos'
    });
});

router.get('/:id_produto', (req, res, next) => {
    const id = req.params.id_produto

    if (id === 'especial') {
        res.status(200).send({
            mensagem: 'Você descobriu o id especial',
            id: id
        });
    } else {
        res.status(200).send({
            mensagem: 'Você passou um Id'
        })
    }
});

module.exports = router;