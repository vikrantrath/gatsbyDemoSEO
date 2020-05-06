const path = require("path")

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions
  if (page.path.match(/^\/press/)) {
    createPage({
      path: "/press",
      matchPath: "/press/*",
      component: path.resolve(`src/pages/press.js`),
    })
  }
}
