// const { validationResult } = require('express-validator');
const productService = require('../service/product.service');
const {
    responseSuccess,
    ResponseCode,
    responseError
} = require('../service/util.service');

const createProduct = async (req, res) => {
    try {
        const data = await productService.createProduct(req.body);
        return responseSuccess(
            res,
            {data},
            ResponseCode.SUCCESS_CREATED
        );
    } catch (ex) {
        // log.error(`Error:: stack: ${ex.stack}`);

        return responseError(
            res,
            ex && ((ex.mapped && ex.mapped()) || ex.message),
            ResponseCode.UNPROCESSABLE_ENTITY
        );
    }
};

const updateProduct = async (req, res) => {
    try {
        const data = await productService.updateProduct(req.params.product_id, req.body);
        return responseSuccess(
            res,
            {data},
            ResponseCode.SUCCESS_OK
        );
    } catch (ex) {
        // log.error(`Error:: stack: ${ex.stack}`);

        return responseError(
            res,
            ex && ((ex.mapped && ex.mapped()) || ex.message),
            ResponseCode.UNPROCESSABLE_ENTITY
        );
    }
};

module.exports = {
    createProduct,
    updateProduct
};