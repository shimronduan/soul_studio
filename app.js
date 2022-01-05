const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/routes');
const swaggerUI = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const CONFIG = require('./config/config');
const options = require('./config/swagger.config');

const app = express();

const specs = swaggerJsDoc(options);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(specs));

const db = `${CONFIG.mongohost}${CONFIG.database}`;
mongoose.connect(db).then(() => console.log(`Connected to ${db}...`));

app.use(express.json());
app.use('/', routes);

app.listen(CONFIG.port, () =>
  console.log(
    `The server is running on port ${CONFIG.port} \n swagger-docs: http://localhost:${CONFIG.port}/api-docs/`
  )
);

module.exports = app;
