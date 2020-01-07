const dotEnv = require('dotenv');

function getEnvConfig() {
   dotEnv.config({ path: './.env'});
  if (
    process.env.TEST_TOKEN &&
    process.env.FIREBASE_API_KEY &&
    process.env.FIREBASE_AUTH_DOMAIN &&
    process.env.FIREBASE_DATABASE_URL &&
    process.env.FIREBASE_PROJECT_ID &&
    process.env.FIREBASE_STORAGE_BUCKET &&
    process.env.FIREBASE_MESSAGE_SENDER_ID &&
    process.env.FIREBASE_APP_ID
    ) {
    return {
      TEST_TOKEN: process.env.TEST_TOKEN,
      FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
      FIREBASE_AUTH_DOMAIN: process.env.FIREBASE_AUTH_DOMAIN,
      FIREBASE_DATABASE_URL: process.env.FIREBASE_DATABASE_URL,
      FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID,
      FIREBASE_STORAGE_BUCKET: process.env.FIREBASE_STORAGE_BUCKET,
      FIREBASE_MESSAGE_SENDER_ID: process.env.FIREBASE_MESSAGE_SENDER_ID,
      FIREBASE_APP_ID: process.env.FIREBASE_APP_ID
    }
  } else {
    throw new Error('One or more environment variable(s) missing');
  }
}

module.exports = {
  getEnvConfig
}