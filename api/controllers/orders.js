// Hnadling incoming GET request /orders
exports.getOrders = (req, res, next) => {
  res.status(200).json({
    message: 'Orders were fetched'
  });
};

// Handling incoming POST request /orders
exports.postOrder = (req, res, next) => {
  res.status(201).json({
    message: 'Order was created'
  });
};

// Handling incoming GET request /orders/:orderId
exports.getOrder = (req, res, next) => {
  const orderId = req.params.orderId;

  res.status(200).json({
    message: 'You discovered a special order'
  });
};

// Handling incoming DELETE request /orders/:orderId
exports.deleteOrder = (req, res, next) => {
  const orderId = req.params.orderId;

  res.status(200).json({
    message: 'Order was deleted'
  });
};
