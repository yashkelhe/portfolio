export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customPurple: "rgb(18, 7, 45)",
        customBlack: "#000000",
      },
      backgroundImage: {
        "custom-radial-gradient":
          "radial-gradient(circle, rgb(18, 7, 45) 0%, #000000 100%)",
        "custom-gradient": "linear-gradient(135deg, rgb(18, 7, 45), #000000)",
      },
    },
  },
  plugins: [],
};
