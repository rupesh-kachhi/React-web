// /**
//  * @type {import('gatsby').GatsbyConfig}
//  */
// module.exports = {
//   siteMetadata: {
//     title: `Sumati.io`,
//     author: `@windedge`,
//     description: `Gatsby starter styled with Tailwind`,
//     siteUrl: `https://www.yourdomain.tld`
//   },
//   plugins: ["gatsby-plugin-netlify-cms", "gatsby-plugin-postcss", "gatsby-plugin-image", "gatsby-plugin-sitemap", {
//     resolve: 'gatsby-plugin-manifest',
//     options: {
//       "icon": "src/images/logo.svg"
//     }
//   }, "gatsby-plugin-mdx", "gatsby-transformer-remark", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
//     resolve: 'gatsby-source-filesystem',
//     options: {
//       "name": "images",
//       "path": "./src/images/"
//     },
//     __key: "images"
//   },
//    {
//     resolve: 'gatsby-source-filesystem',
//     options: {
//       "name": "pages",
//       "path": "./src/pages/"
//     },
//     __key: "pages"
//   }]
// };

module.exports = {
  siteMetadata: {
    title: `Gatsby Tailwind Serif`,
    description: `Gatsby starter styled with Tailwind`,
    author: `@windedge`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-tailwind--serif`,
        short_name: `serif`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#4dc0b5`,
        display: `minimal-ui`,
        icon: `static/favicon.png`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content`,
        name: 'services'
      }
    },
    'gatsby-transformer-remark',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-postcss',
    {
      resolve: "gatsby-plugin-purgecss",
      options: {
        tailwind: true,
        purgeOnly: ["src/css/style.css"]
      }
    },
    'gatsby-plugin-offline'
  ]
};
