
const logger = require('pino')({
    base: {
      env: process.env.ENV || 'ENV not set'
    }
  });

export default logger;