require('dotenv').config();

const config = {
  bartApiKey: process.env.BART_API_KEY,
  PORT: process.env.PORT || 3001
};

module.exports = config;