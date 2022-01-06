const express = require('express');
const router = express.Router();
const productValidator = require('../validators/product.validator');

const productsController = require('../controllers/products.controller');

router.put(
  '/:product_id',
  productValidator.validateUpdateProduct(),
  productsController.updateProduct
);

router.post(
  '/',
  productValidator.validateCreateProduct(),
  productsController.createProduct
);

module.exports = router;
