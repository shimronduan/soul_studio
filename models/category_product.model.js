const mongoose = require('mongoose');

const CategoryProduct = mongoose.Schema(
    {
        categoryId: {
            type: mongoose.Schema.Types.ObjectId, ref: 'categories',
            required: true
        },
        products: [
            {
                id:  mongoose.Schema.Types.ObjectId, ref: 'products',
                name: String
            }
        ]
    }
);


module.exports = mongoose.model('category_products', CategoryProduct);