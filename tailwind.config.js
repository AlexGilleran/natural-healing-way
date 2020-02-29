module.exports = {
  theme: {
    extend: {
      colors: {
        "nhw-green": "#0c9954",
        "nhw-brown": "#965c22",
        "nhw-contact-us-bg": "#daf2e9"
      },
      transitionProperty: {
        "nav-menu": "visibility, opacity"
      }
    }
  },
  variants: {
    visibility: ["group-hover", "responsive"],
    opacity: ["group-hover", "responsive"],
    cursor: ["responsive", "hover"]
  }
};
