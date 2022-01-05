const express = require('express');
const mongoose = require('mongoose');
const categoryRoutes = require('./routes/category.routes');
const productRoutes = require('./routes/product.routes');
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");

const port = 3005

const options = {
	definition: {
		openapi: "3.0.0",
		info: {
			title: "Library API",
			version: "1.0.0",
			description: "A simple Express Library API",
		},
		servers: [
			{
				url: `http://localhost:${port}`,
			},
		],
	},
	apis: ["./swagger/*.js"],
};

const specs = swaggerJsDoc(options);

const app = express();
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));


const db = 'mongodb://localhost:27017/studio';
mongoose.connect(db).then(() => console.log(`Connected to ${db}...`));

app.use(express.json());
app.use('/categories', categoryRoutes);
app.use('/products', productRoutes);
app.use('/', async function(req, res) {
    res.statusCode = 200;
    res.json({
        status: 'success',
        message: 'Service is working!!',
        data: {}
    });
});


app.listen(port, () => console.log(`The server is running on port ${port}`));


module.exports = app;