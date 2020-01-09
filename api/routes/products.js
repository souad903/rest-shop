const express = require('express');
const router = express.Router();

const productController = require('../controllers/products');

// GET /products
router.get('/', productController.getProducts);

// POST /products
router.post('/', productController.createProduct);

// GET /products/:productId
router.get('/:productId', productController.getProduct);

// PATCH /products/:productId
router.patch('/:productId', productController.updateProduct);

// DELETE /products/:productId
router.delete('/:productId', productController.deleteProduct);

module.exports = router;
