// Handling GET request /products
exports.getProducts = (req, res, next) => {
  res.status(200).json({
    message: 'Handling GET requests to /products'
  });
};

// Handling POST request /products
exports.createProduct = (req, res, next) => {
  res.status(200).json({
    message: 'Handling POST requests to /products'
  });
};

// Handling GET request /products/:productId
exports.getProduct = (req, res, next) => {
  const id = req.params.productId;
  if (id === 'special') {
    res.status(200).json({
      message: 'You discovered the special ID'
    });
  }
};

// Handling PATCH request /products/:productId
exports.updateProduct = (req, res, next) => {
  res.status(200).json({
    message: 'Updated product'
  });
};

// Handling DELETE request /products/:productId
exports.deleteProduct = (req, res, next) => {
  res.status(200).json({
    message: 'Deleted product'
  });
};
