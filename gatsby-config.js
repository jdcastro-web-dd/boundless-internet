module.exports = {
  siteMetadata: {
    title: `Boundless Internet`,
    description: `Static site for northern bay area internet service provider Boundless Internet.`,
    author: `@jacobdcastro`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#DBDBDB`,
        theme_color: `#0678D8`,
        display: `minimal-ui`,
        icon: `src/images/boundlesslogo.jpg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `fg810vtwsjvw`,
        accessToken: `f3-uLUeBM_M_St8ZUiJHeO0AI5xcsmzf1rIwsB7kXnk`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-sharp`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
