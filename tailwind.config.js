export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        'bounce-spin': 'bounce-spin 2s infinite ease-in-out',
      },
      keyframes: {
        'bounce-spin': {
          '0%, 100%': { transform: 'scale(0)', opacity: 0.5 },
          '50%': { transform: 'scale(1)', opacity: 1 },
        },
      },
    },
  },  
  plugins: [],
};
