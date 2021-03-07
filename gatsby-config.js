module.exports = {
  siteMetadata: {
    title: "palp's nostalgic sound library",
    description: "mi librería personal de nostalgia",
    autor: "palp",
    twitter: "@NowherePalp",
    email: "pablomunozgarcia@outlook.com",
    siteUrl: "https://palps-nostalgic-sound-library.netlify.app/"
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-transformer-remark",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "markdown-pages",
        path: "./src/markdown-pages/",
      },
      __key: "markdown-pages",
    },
  ],
};
