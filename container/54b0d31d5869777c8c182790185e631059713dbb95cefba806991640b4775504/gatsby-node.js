/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require(`path`)
const MarkdownIt = require('markdown-it')
const { createRemoteFileNode } = require(`gatsby-source-filesystem`)

const markdown = new MarkdownIt()

exports.createPages = async ({ actions, graphql }) => {
  const { data } = await graphql(`
    query PagesQuery {
      pages: allGraphCmsPage() {
        nodes {
          id,
          slug,
        }
      }
    }
  `)
  data.pages.nodes.forEach(page => {
    actions.createPage({
      path: page.slug,
      component: path.resolve(`./src/components/Page.js`),
      context: {
        pageId: page.id,
      },
    })
  })
}

exports.createResolvers = ({
  actions,
  cache,
  createNodeId,
  createResolvers,
  store,
  reporter,
}) => {
  const { createNode } = actions
  createResolvers({
    GraphCMS_Asset: {
      imageFile: {
        type: `File`,
        resolve(source, args, context, info) {
          return createRemoteFileNode({
            url: source.url,
            store,
            cache,
            createNode,
            createNodeId,
            reporter,
          })
        },
      },
    },
    GraphCMS_Page: {
      subtitle: {
        resolve(source, args, context, info) {
          return markdown.render(source.subtitle)
        }
      }
    }
  })
}
