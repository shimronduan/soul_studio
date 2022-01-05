require('dotenv').config();

const CONFIG = {};
CONFIG.port = process.env.PORT || '4000';

CONFIG.mongohost = process.env.DB_URL || 'mongodb://localhost:27017/';
CONFIG.database = process.env.DB_NAME || 'soul_studio';

module.exports = CONFIG;
