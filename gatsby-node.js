const path = require("path")

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions
  if (page.path.match(/^\/news/)) {
    createPage({
      path: "/news",
      matchPath: "/news/*",
      component: path.resolve(`src/pages/news.js`),
    })
  }

  if (page.path.match(/^\/market-report-research/)) {
    createPage({
      path: "/market-report-research",
      matchPath: "/market-report-research/*",
      component: path.resolve(`src/pages/market-report-research.js`),
    })
  }
}
