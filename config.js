const dotenv = require('dotenv');

dotenv.config();

const config = {
  dev: process.env.NODE_ENV !== 'production',
  port: process.env.API_PORT,
  host: process.env.API_host,
  cors: process.env.CORS,
};

module.exports = config;