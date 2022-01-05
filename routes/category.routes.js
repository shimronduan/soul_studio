const express = require('express');
const router = express.Router();
const categoryValidator = require('../validators/category.validator');
const categoriesController = require('../controllers/categories.controller');

router.get(
  '/:category_id/products',
  categoryValidator.validateGetProductsByCategory(),
  categoriesController.getProductsByCategory
);

router.get('/', categoriesController.getCategories);

router.post(
  '/',
  categoryValidator.validateCreateCategory(),
  categoriesController.createCategory
);

module.exports = router;
