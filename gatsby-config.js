/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Sheer Analytics",
    titleTemplate: "%s · Analyze",
    description: "Get Reports Easy",
    url: "https://www.sheeranalyticsandinsights.com", // No trailing slash allowed!
    // image: "/images/snape.jpg", // Path to your image you placed in the 'static' folder
    // twitterUsername: "@occlumency",
  },
  plugins: [
    {
      resolve: `gatsby-source-mysql`,
      options: {
        connectionDetails: {
          host: "localhost",
          user: "root",
          password: "password",
          database: "sheeranalyticsandinsights_sheer",
        },
        queries: [
          {
            statement: "SELECT * FROM presses order by id desc",
            idFieldName: "id",
            name: "presses",
          },
          {
            statement:
              "SELECT * FROM syn_lpr_reports where report_sub_type=1 order by id desc",
            idFieldName: "id",
            name: "latestreports",
          },
          {
            statement:
              "select * from ind_cat_sectors where status=1",
            idFieldName: "id",
            name: "industrycategorysector",
          },
          {
            statement:
              "select * from industry_cats where status=1",
            idFieldName: "id",
            name: "industrycategory",
          },
          {
            statement:
              "select * from abouts",
            idFieldName: "id",
            name: "abouts",
          },
          {
            statement:
              "select * from contacts",
            idFieldName: "id",
            name: "contacts",
          },
        ],
      },
    },
    // ... other plugins
  ],
}
