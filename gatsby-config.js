module.exports = {
  // pathPrefix: "DeveloperPortfolio",
  siteMetadata: {
    title: `Vincent Tieu's Developer Portfolio`,
    description: `Hi, I'm Vincent Tieu and this is my developer portfolio!`,
    author: `Vincent Tieu <vincentktieu101@gmail.com>`,
    url: "vincentktieu.com",
    image: "/preview.png",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-material-ui`,
    // used to properly use material ui styles and icons
    `gatsby-plugin-sass`
    // used to properly use sass
  ],
};
