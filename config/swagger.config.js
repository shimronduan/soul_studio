const CONFIG = require('./config');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Soul Studio APIs',
      version: '1.0.0',
      description: 'documentation for Soul Studio APIs',
    },
    servers: [
      {
        url: `http://localhost:${CONFIG.port}`,
      },
    ],
  },
  apis: ['./swagger/*.js'],
};

module.exports = options;
