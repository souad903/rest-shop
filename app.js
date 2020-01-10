const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const MONGODB_URI =
  'mongodb+srv://shop:' +
  process.env.MONGO_ATLAS_PW +
  '@cluster0-ofjpi.mongodb.net/shop';

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-headers',
    'Origin, X-Request-With, Content-Type, Accept, Authorization'
  );
  res.header('Access-Control-Allow-Method', 'GET, PUT, POST, DELETE, PATCH');
  next();
});

const productRoutes = require('./api/routes/products');
const orderRoutes = require('./api/routes/orders');

const port = process.env.PORT || 3000;

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/products', productRoutes);
app.use('/orders', orderRoutes);

app.use((req, res, next) => {
  const error = new Error('Not found');
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});

mongoose
  .connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(result => {
    console.log('Le serveur est démaré ');
    app.listen(port);
  })
  .catch(err => {
    console.log(err);
  });
