const express = require('express');
const routes = express.Router();

const ProductController = require('./controllers/ProductController');

routes.get('/products', ProductController.index);
routes.get('/products/:id', ProductController.show);
routes.delete('/products/delete/:id', ProductController.destroy);
routes.put('/products/update/:id', ProductController.update);
routes.post('/store', ProductController.store);

module.exports = routes;