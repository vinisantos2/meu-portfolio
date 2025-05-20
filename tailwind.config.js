// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      animation: {
        zoomy: 'zoomy 5s ease-in-out infinite',
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
