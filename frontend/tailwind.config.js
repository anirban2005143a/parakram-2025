module.exports = {
    theme: {
      extend: {
        keyframes: {
          glow: {
            "0%, 100%": { filter: "drop-shadow(0 0 20px rgba(59, 130, 246, 0.8))" },
            "50%": { filter: "drop-shadow(0 0 40px rgba(59, 130, 246, 1))" },
          },
        },
        animation: {
          glow: "glow 2s infinite",
        },
      },
    },
    plugins: [],
  };