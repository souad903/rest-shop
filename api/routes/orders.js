const express = require('express');
const router = express.Router();

const ordersControllers = require('../controllers/orders');

// GET /orders
router.get('/', ordersControllers.getOrders);

// POST /orders
router.post('/', ordersControllers.postOrder);

// GET /orders/:orderId
router.get('/:orderId', ordersControllers.getOrder);

// DELETE /orders/:orderId
router.delete('/:orderId', ordersControllers.deleteOrder);

module.exports = router;
