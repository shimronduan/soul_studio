const { isValidObjectId } = require("mongoose");
const Product = require("../models/product.model");

class ProductService {

    async createProduct(data) {
        try {
            let product = new Product(data);
            product = await product.save();

            return product;
        } catch (ex) {
            console.log(`Error fetching data ${ex}`);
            throw new Error();
        }
    }
    async updateProduct(id, data) {
        try {

            let product = await Product.findById({ _id: id });
            if (product) {
                product.set({ ...data });
                await product.save();
            }
            return product;
        } catch (ex) {
            console.log(`Error fetching data ${ex}`);
            throw new Error();
        }
    }
    async getProductByCategory(categoryId) {
        try {
            let products = await Product.find({ categories: categoryId }).select({ _id: 1, name: 1, price: 1 });
            return products;
        } catch (ex) {
            console.log(`Error fetching data ${ex}`);
            throw new Error();
        }
    }
}   

module.exports = new ProductService();