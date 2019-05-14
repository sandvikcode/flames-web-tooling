const eslintConf = require('./eslint');

// this project does not use react, this removes the annoying warnings from the tests
eslintConf.settings.react.version = '999.999.999';

module.exports = eslintConf;
