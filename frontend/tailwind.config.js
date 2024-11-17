export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: "Matemasie",
        roboto1: "New Amsterdam",
        roboto2: "Bodoni Moda SC",
        roboto3: "Playwrite France Moderne",
        roboto4: "Raleway",
        Bungee: "Bungee Tint",
        Kanit: "Kanit",
      },
      colors: {
        customPurple: "rgb(18, 7, 45)",
        customBlack: "#000000",
      },
      backgroundImage: {
        "custom-radial-gradient":
          "radial-gradient(circle, rgb(18, 7, 45) 0%, #000000 100%)",
        "custom-gradient": "linear-gradient(135deg, rgb(18, 7, 45), #000000)",
        "custom-abuot-color": "linear-gradient(135deg, rgb(18, 7, 45),#909fe9)",
        "custom-box-color":
          "linear-gradient(135deg, rgb(18, 7, 45),#393b76, #212245)",
      },
      backdropFilter: {
        none: "none",
        blur: "blur(30px)",
      },
      boxShadow: {
        custom: "0px 0px 30px rgba(227, 228, 237, 0.37)",
      },
      borderColor: {
        custom: "rgba(255, 255, 255, 0.18)",
      },
    },
  },
  plugins: [],
};
