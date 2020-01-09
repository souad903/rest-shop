const express = require('express');

const productRoutes = require('./api/routes/products');

const port = process.env.PORT || 3000;

const app = express();

app.use('/products', productRoutes);

app.listen(port);
