// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      animation: {
         "spin-slow": "spin 18s linear infinite",
      },
      keyframes: {
        zoomy: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
      },
    },
  },
}
