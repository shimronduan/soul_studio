const categoryService = require('../service/category.service');
const productService = require('../service/product.service');
const {
  responseSuccess,
  ResponseCode,
  responseError,
} = require('../service/util.service');
const { validationResult } = require('express-validator');
const { errorFormatter } = require('../validators/common.validator');
const categoryTransformer = require('../transformers/category.transformer');
const productTransformer = require('../transformers/product.transformer');

const getCategories = async (req, res) => {
  try {
    const data = await categoryService.getAll();
    return responseSuccess(
      res,
      { data: categoryTransformer.transformList(data) },
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

const createCategory = async (req, res) => {
  try {
    validationResult(req).formatWith(errorFormatter).throw();
    const { name, parent } = req.body;
    const data = await categoryService.createCategory(name, parent);
    return responseSuccess(
      res,
      { data: categoryTransformer.transform(data) },
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

const getProductsByCategory = async (req, res) => {
  try {
    validationResult(req).formatWith(errorFormatter).throw();
    const categoryId = req.params.category_id;
    const data = await productService.getProductByCategory(categoryId);
    return responseSuccess(
      res,
      { data: productTransformer.transformList(data) },
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

module.exports = {
  getCategories,
  createCategory,
  getProductsByCategory,
};
