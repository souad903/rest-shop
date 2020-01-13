const Order = require('../models/orders');
const Product = require('../models/products');

// Hnadling incoming GET requests to /orders
exports.getOrders = (req, res, next) => {
  Order.find()
    .select('product quantity _id')
    .populate('product')
    .exec()
    .then(docs => {
      res.status(200).json({
        count: docs.length,
        orders: docs.map(doc => {
          return {
            _id: doc._id,
            product: doc.product,
            quantity: doc.quantity,
            request: {
              type: 'GET',
              url: 'http://localhost:3000/orders/' + doc._id
            }
          };
        })
      });
    })
    .catch(err => {
      console.log(err);
      json.status(500).json({ error: err });
    });
};

// Handling incoming POST requests to /orders
exports.postOrder = (req, res, next) => {
  Product.findById(req.body.productId)
    .then(product => {
      if (!product) {
        return res.status(404).json({
          message: 'Product not found'
        });
      }

      const order = new Order({
        quantity: req.body.quantity,
        product: req.body.productId
      });
      order.save().then(result => {
        res.status(201).json({
          massage: 'Order stored',
          creactedOrder: {
            _id: result._id,
            product: result.product,
            quantity: result.quantity
          },
          request: {
            Type: 'POST',
            url: 'http://localhost:3000/orders'
          }
        });
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });
};

// Handling incoming GET requests to /orders/:orderId
exports.getOrder = (req, res, next) => {
  Order.findById(req.params.orderId)
    .select('product quantity _id')
    .populate('product')
    .exec()
    .then(order => {
      if (!order) {
        return res.status(404).json({
          message: 'Order not found'
        });
      }
      res.status(200).json({
        order: order,
        request: {
          type: 'GET',
          url: 'http://localhost:3000/orders'
        }
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });
};

// Handling incoming DELETE requests to /orders/:orderId
exports.deleteOrder = (req, res, next) => {
  Order.deleteOne({ _id: req.params.orderId })
    .exec()
    .then(result => {
      res.status(200).json({
        message: 'Order deleted',
        request: {
          type: 'POST',
          url: 'http://localhost:3000/orders'
        }
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });
};
