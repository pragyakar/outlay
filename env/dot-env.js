const dotEnv = require('dotenv');

function getEnvConfig() {
   dotEnv.config({ path: './.env'});
  if (process.env.TEST_TOKEN) {
    return {
      TEST_TOKEN: process.env.TEST_TOKEN
    }
  } else {
    throw new Error('Environment variables missing');
  }
}

module.exports = {
  getEnvConfig
}