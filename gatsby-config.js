/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Sheer Analytics And Insights",
    titleTemplate: "%s · Analyze",
    description: "Global Market Reports",
    url: "https://www.sheeranalyticsandinsights.com", // No trailing slash allowed!
    // image: "/images/snape.jpg", // Path to your image you placed in the 'static' folder
    // twitterUsername: "@occlumency",
  },
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "UA-120128546-1", // Google Analytics / GA
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
          optimize_id: "OPT_CONTAINER_ID",
          anonymize_ip: true,
          cookie_expires: 0,
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: false,
          // Setting this parameter is also optional
          respectDNT: true,
          // Avoids sending pageview hits from custom paths
          exclude: [],
        },
      },
    },
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
            statement: "SELECT * FROM presses where status = 1 order by id desc",
            idFieldName: "id",
            name: "presses",
          },
          {
            statement:
              "SELECT * FROM syn_lpr_reports where report_sub_type=1 and status = 1 order by id desc",
            idFieldName: "id",
            name: "latestreports",
          },
          {
            statement: "select * from ind_cat_sectors where status = 1 order by id desc",
            idFieldName: "id",
            name: "industrycategorysector",
          },
          {
            statement: "select * from industry_cats where status=1 order by id desc",
            idFieldName: "id",
            name: "industrycategory",
          },
          {
            statement: "select * from abouts",
            idFieldName: "id",
            name: "abouts",
          },
          {
            statement: "select * from contacts",
            idFieldName: "id",
            name: "contacts",
          },
          {
            statement: "select * from news where status=1 order by id desc",
            idFieldName: "id",
            name: "news",
          },
          {
            statement: "select * from presses where status = 1 order by id desc",
            idFieldName: "id",
            name: "presses",
          },
          {
            statement:
              "select * from syn_lpr_reports where status=1 order by id desc",
            idFieldName: "id",
            name: "syndicatereport",
          },
          {
            statement:
              "select * from pass_lpr_reports where status=1 order by id desc",
            idFieldName: "id",
            name: "passLprReport",
          },
          {
            statement:
              "select * from pass2_reports where status=1 order by id desc",
            idFieldName: "id",
            name: "pass2Report",
          },
          {
            statement:
              "select * from upcomings where status=1 order by id desc",
            idFieldName: "id",
            name: "upcomings",
          },
          {
            statement: "select * from region_cats where status=1",
            idFieldName: "id",
            name: "region",
          },
          {
            statement: "select * from reg_cat_sectors where status=1",
            idFieldName: "id",
            name: "regionSector",
          },
          {
            statement: "select * from blogs where status=1",
            idFieldName: "id",
            name: "blogs",
          },
        ],
      },
    },
    // ... other plugins
  ],
}
