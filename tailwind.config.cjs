const baseConfig = require('../landing/tailwind.config.js');

module.exports = {
  ...baseConfig,
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
};
