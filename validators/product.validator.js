const { checkSchema } = require('express-validator');

const validateCreateProduct = () => {
  return checkSchema({
    name: {
      exists: {
        errorMessage: 'Is required',
      },
      isString: {
        errorMessage: 'Must be a string',
      },
    },
    price: {
      exists: {
        errorMessage: 'Is required',
      },
      isInt: {
        errorMessage: 'Must be a integer',
      },
      toInt: true,
    },
    categories: {
      optional: { options: { nullable: false } },
      isArray: {
        errorMessage: 'Invalid parent category id',
      },
    },
  });
};

const validateUpdateProduct = () => {
  return checkSchema({
    product_id: {
      in: ['params'],
      exists: {
        errorMessage: 'Is required',
      },
      isMongoId: {
        errorMessage: 'Invalid product id',
      },
    },
    name: {
      optional: { options: { nullable: false } },
      isString: {
        errorMessage: 'Must be a string',
      },
    },
    price: {
      optional: { options: { nullable: false } },
      isInt: {
        errorMessage: 'Must be a integer',
      },
      toInt: true,
    },
  });
};

module.exports = {
  validateCreateProduct,
  validateUpdateProduct,
};
