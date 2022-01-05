const mongoose = require('mongoose');

const Product = mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        categories: [ {type: mongoose.Schema.Types.ObjectId, ref: 'categories'}]
    }
);


module.exports = mongoose.model('products', Product);