const path = require("path")

module.exports = {
  siteMetadata: {
    title: `Winfield Sports`,
    siteUrl: "https://www.winfieldsports.net",
    description: `One of Asia's leading sports branding and signage companies specializing in 3D and VR advertising.`,
    author: `@jdlk07`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `winfield-sports`,
        short_name: `WS`,
        start_url: `/`,
        background_color: `#15171a`,
        theme_color: `#15171a`,
        display: `minimal-ui`,
        icon: `src/images/ws_logo.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    `gatsby-plugin-sass`,
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        components: path.join(__dirname, "src/components"),
        pages: path.join(__dirname, "src/pages"),
        styles: path.join(__dirname, "src/assets/styles"),
        images: path.join(__dirname, "src/assets/images"),
      },
    },
    {
      resolve: `gatsby-plugin-transition-link`,
      options: {
        injectPageProps: false,
      },
    },
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: "www.winfieldsports.net",
        //Bototm is set to allow uploading the file to AWS. see https://github.com/jariz/gatsby-plugin-s3/issues/38
        acl: null,
      },
    },
  ],
}
