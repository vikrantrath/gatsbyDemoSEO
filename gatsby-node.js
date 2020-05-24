const path = require("path")

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions
  createPage({
    path: "/",
    matchPath: "*",
    component: path.resolve(`src/pages/index.js`),
  })
}
