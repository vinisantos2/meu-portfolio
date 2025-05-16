// postcss.config.js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {}, // geralmente você também quer o autoprefixer
  },
};

// ou

// postcss.config.mjs
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};