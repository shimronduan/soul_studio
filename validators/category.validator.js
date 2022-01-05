const { checkSchema } = require('express-validator');

const validateCreateCategory = () => {
  return checkSchema({
    name: {
      exists: {
        errorMessage: 'Is required',
      },
      isString: {
        errorMessage: 'Must be a string',
      },
    },
    parent: {
      optional: { options: { nullable: false } },
      isArray: {
        errorMessage: 'Must be an array',
      },
    },
  });
};

const validateGetProductsByCategory = () => {
  return checkSchema({
    category_id: {
      in: ['params'],
      exists: {
        errorMessage: 'Is required',
      },
      isMongoId: {
        errorMessage: 'Invalid category id',
      },
    },
  });
};

module.exports = {
  validateCreateCategory,
  validateGetProductsByCategory,
};
