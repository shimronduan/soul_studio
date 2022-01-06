const { validationResult } = require('express-validator');
const { errorFormatter } = require('../validators/common.validator');
const productService = require('../service/product.service');
const {
  responseSuccess,
  ResponseCode,
  responseError,
} = require('../service/util.service');
const productTransformer = require('../transformers/product.transformer');

const createProduct = async (req, res) => {
  try {
    validationResult(req).formatWith(errorFormatter).throw();

    const data = await productService.createProduct(req.body);
    return responseSuccess(
      res,
      { data: productTransformer.transform(data) },
      ResponseCode.SUCCESS_CREATED
    );
  } catch (ex) {
    return responseError(
      res,
      ex && ((ex.mapped && ex.mapped()) || ex.message),
      ResponseCode.UNPROCESSABLE_ENTITY
    );
  }
};

const updateProduct = async (req, res) => {
  try {
    validationResult(req).formatWith(errorFormatter).throw();

    const data = await productService.updateProduct(
      req.params.product_id,
      req.body
    );
    return responseSuccess(
      res,
      { data: productTransformer.transform(data) },
      ResponseCode.SUCCESS_OK
    );
  } catch (ex) {
    return responseError(
      res,
      ex && ((ex.mapped && ex.mapped()) || ex.message),
      ResponseCode.UNPROCESSABLE_ENTITY
    );
  }
};

module.exports = {
  createProduct,
  updateProduct,
};
