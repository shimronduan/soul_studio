const express = require('express');
const router = express.Router();

const categoriesController = require('../controllers/categories.controller');


router.get('/:category_id/products',
    categoriesController.getProductsByCategory
);

router.get('/',
    categoriesController.getCategories
);

router.post('/',
    categoriesController.createCategory
);

module.exports = router;