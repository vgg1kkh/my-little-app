/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  flags: {
    PARALLEL_QUERY_RUNNING: true,
  },
  plugins: [
    "gatsby-transformer-remark",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",

    // {
    //   resolve: `gatsby-plugin-sharp`,
    //   options: {
    //     // Defaults used for gatsbyImageData and StaticImage
    //     defaults: {},
    //     // Set to false to allow builds to continue on image errors
    //     failOnError: true,
    //     // deprecated options and their defaults:
    //     base64Width: 20,
    //     forceBase64Format: `png`, // valid formats: png,jpg,webp
    //     useMozJpeg: process.env.GATSBY_JPEG_ENCODER === `MOZJPEG`,
    //     stripMetadata: true,
    //     defaultQuality: 50,
    //   },
    // },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `notes`,
        path: `${__dirname}/src/notes/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/projects/`,
      },
    },
  ],
  siteMetadata: {
    title: "A Little Birdy",
    description: "Art work porfolio",
    copyright: "Copyright by A Little Birdy @2021",
    contact: "fansx222@gmail.com",
  },
}
