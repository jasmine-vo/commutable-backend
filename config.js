require('dotenv').config();

const config = {
  bartApiKey: process.env.BART_API_KEY,
  indeedPublisherID: process.env.INDEED_PUBLISHER_ID,
  PORT: process.env.PORT || 3001
};

module.exports = config;