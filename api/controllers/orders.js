// Hnadling incoming GET requests to /orders
exports.getOrders = (req, res, next) => {
  res.status(200).json({
    message: 'Orders were fetched'
  });
};

// Handling incoming POST requests to /orders
exports.postOrder = (req, res, next) => {
  res.status(201).json({
    message: 'Order was created'
  });
};

// Handling incoming GET requests to /orders/:orderId
exports.getOrder = (req, res, next) => {
  const orderId = req.params.orderId;

  res.status(200).json({
    message: 'You discovered a special order'
  });
};

// Handling incoming DELETE requests to /orders/:orderId
exports.deleteOrder = (req, res, next) => {
  const orderId = req.params.orderId;

  res.status(200).json({
    message: 'Order was deleted'
  });
};
