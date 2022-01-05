const express = require('express');
const router = express.Router();
const categoryRoutes = require('./category.routes');
const productRoutes = require('./product.routes');

router.use('/categories', categoryRoutes);
router.use('/products', productRoutes);
router.use('/', async function (req, res) {
  res.statusCode = 200;
  res.json({
    status: 'success',
    message: 'Service is working!!',
    data: {},
  });
});

module.exports = router;
