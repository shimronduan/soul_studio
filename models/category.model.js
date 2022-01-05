const mongoose = require('mongoose');
const Category = mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        children: [ {type: mongoose.Schema.Types.ObjectId, ref: 'categories', autopopulate: true }]
    }
);

Category.plugin(require('mongoose-autopopulate'));
module.exports = mongoose.model('categories', Category);