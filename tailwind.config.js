// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }
// eslint-disable-next-line
/** @type {import('tailwindcss').Config} */

// eslint-disable-next-line
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    // eslint-disable-next-line
    plugin(({ addVariant }) => {
      addVariant('current', '&.active');
    }),
  ],
};
