// Handling GET requests to /products
exports.getProducts = (req, res, next) => {
  res.status(200).json({
    message: 'Handling GET requests to /products'
  });
};

// Handling POST requests to /products
exports.createProduct = (req, res, next) => {
  res.status(200).json({
    message: 'Handling POST requests to /products'
  });
};

// Handling GET requests to /products/:productId
exports.getProduct = (req, res, next) => {
  const id = req.params.productId;
  if (id === 'special') {
    res.status(200).json({
      message: 'You discovered the special ID'
    });
  }
};

// Handling PATCH requests to /products/:productId
exports.updateProduct = (req, res, next) => {
  res.status(200).json({
    message: 'Updated product'
  });
};

// Handling DELETE requests to /products/:productId
exports.deleteProduct = (req, res, next) => {
  res.status(200).json({
    message: 'Deleted product'
  });
};
