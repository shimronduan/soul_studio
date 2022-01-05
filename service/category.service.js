const { isValidObjectId } = require("mongoose");
const Category = require("../models/category.model");

class CategoryService {

    async getAll() {
        try {
            return await Category.find({});
        } catch (ex) {
            console.log(`Error fetching data ${ex}`);
            throw new Error();
        }
    }

    async createCategory(name, parent = null) {
        try {
            let category = new Category({ name });
            category = await category.save();
            if (parent && isValidObjectId(parent)) {
                let parentCategory = await Category.findById({ _id: parent });
                if (parentCategory) {
                    parentCategory.set({ children: [...parentCategory.children, category._id] });
                    await parentCategory.save();
                }
            }
            return category;
        } catch (ex) {
            console.log(`Error fetching data ${ex}`);
            throw new Error();
        }
    }
}

module.exports = new CategoryService();