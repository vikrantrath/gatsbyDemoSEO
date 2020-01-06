/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-mysql`,
      options: {
        connectionDetails: {
          host: 'localhost',
          user: 'root',
          password: 'password',
          database: 'graphql_test_db'
        },
        queries: [
          {
            statement: 'SELECT * FROM user',
            idFieldName: '_id',
            name: 'user'
          }
        ]
      }
    }
    // ... other plugins
  ]
}
