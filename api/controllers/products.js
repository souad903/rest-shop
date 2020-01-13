const Product = require('../models/products');

// Handling GET requests to /products
exports.getProducts = (req, res, next) => {
  Product.find()
    .then(docs => {
      const response = {
        count: docs.length,
        products: docs.map(doc => {
          return {
            name: doc.name,
            price: doc.price,
            _id: doc._id,
            request: {
              type: req.method,
              url: 'http://localhost:3000/products/' + doc._id
            }
          };
        })
      };

      res.status(200).json(response);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
};

// Handling POST requests to /products
exports.createProduct = (req, res, next) => {
  const product = new Product({
    name: req.body.name,
    price: req.body.price
  });

  product
    .save()
    .then(result => {
      res.status(200).json({
        product: {
          name: result.name,
          price: result.price,
          _id: result._id,
          request: {
            type: req.method,
            url: 'http://localhost:3000/products/' + result._id
          }
        }
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });
};

// Handling GET requests to /products/:productId
exports.getProduct = (req, res, next) => {
  const id = req.params.productId;

  Product.findById(id)
    .exec()
    .then(doc => {
      if (doc) {
        res.status(200).json(doc);
      } else {
        res.status(404).json({ message: 'Aucune valeur pour le ID fournis' });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });
};

// Handling PATCH requests to /products/:productId
exports.updateProduct = (req, res, next) => {
  const id = req.params.productId;
  Product.update(
    { _id: id },
    { $set: { name: req.body.name, price: req.body.price } }
  )
    .exec()
    .then(result => {
      res.status(200).json({ message: 'Product updated' });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });
};

// Handling DELETE requests to /products/:productId
exports.deleteProduct = (req, res, next) => {
  const id = req.params.productId;
  Product.remove({ _id: id })
    .exec()
    .then(result => {
      res.status(200).json({ message: 'Product deleted' });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });
};
