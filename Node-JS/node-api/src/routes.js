const express = require('express');
const routes = express.Router();
const ProductController = require('./controllers/ProductController');

//routes.get('/', (req, res) => { res.send('Home') });

routes.get('/products', ProductController.index);
routes.get('/products/:id', ProductController.show);

routes.post('/products', ProductController.store);
    
routes.put('/products/:id', ProductController.update);
//routes.get('/api', (req, res) => { res.send('Hi') })
routes.delete('/products/:id', ProductController.destroy);

module.exports = routes;