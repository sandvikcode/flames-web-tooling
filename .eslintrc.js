const config = require('./eslint');

config.env.node = true;

// This project does not use React, remove the annoying warnings from the tests.
config.settings.react.version = '999.999.999';

config.rules['import/no-commonjs'] = 'off';

module.exports = config;
