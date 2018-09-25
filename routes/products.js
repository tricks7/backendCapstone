const express = require('express');
const router = express.Router();

const queries = require('../queries');

router.get("/", (request, response, next) => {
    queries.list().then(products => {
        response.json({products});
    }).catch(next);
});

router.get("/:id", (request, response, next) => {
    queries.read(request.params.id).then(product => {
        product
            ? response.json({product})
            : response.sendStatus(404)
    }).catch(next);
});

router.post("/", (request, response, next) => {
    queries.create(request.body).then(product => {
        response.status(201).json({product: product});
    }).catch(next);
});

router.delete("/:id", (request, response, next) => {
    queries.delete(request.params.id).then(() => {
        response.sendStatus(204);
    }).catch(next);
});

router.put("/:id", (request, response, next) => {
    queries.update(request.params.id, request.body).then(product => {
        response.json({product: product[0]});
    }).catch(next);
});

module.exports = router;