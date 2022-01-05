const express = require('express');
const router = express.Router();

const productsController = require('../controllers/products.controller');



router.put('/:product_id',
    productsController.updateProduct
);


router.post('/',
    productsController.createProduct
);

module.exports = router;