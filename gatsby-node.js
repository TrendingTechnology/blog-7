const Promise = require('bluebird');
const path = require('path');

const kebabCase = require('kebab-case');
const uniq = require('lodash.uniq');

const { createFilePath } = require('gatsby-source-filesystem');

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;

  return new Promise((resolve, reject) => {
    const blogPost = path.resolve('./src/templates/blog-post.js');
    const tagTemplate = path.resolve('./src/templates/tags.js');

    resolve(graphql(`
      {
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, limit: 2000) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
                tags
              }
            }
          }
        }
      }
    `).then((result) => {
      if (result.errors) {
        // eslint-disable-next-line
        console.log(result.errors);
        reject(result.errors);
      }

      // Create blog posts pages.
      const posts = result.data.allMarkdownRemark.edges;

      posts.forEach((post, index) => {
        const previous = index === posts.length - 1 ? null : posts[index + 1].node;
        const next = index === 0 ? null : posts[index - 1].node;

        createPage({
          path: post.node.fields.slug,
          component: blogPost,
          context: {
            slug: post.node.fields.slug,
            previous,
            next,
          },
        });
      });

      // Tag pages:
      let tags = [];
      posts.forEach((edge) => {
        if (edge.node.frontmatter.tags) {
          tags = tags.concat(edge.node.frontmatter.tags);
        }
      });
      // Eliminate duplicate tags
      tags = uniq(tags);

      // Make tag pages
      tags.forEach((tag) => {
        createPage({
          path: `/tags/${kebabCase(tag)}/`,
          component: tagTemplate,
          context: {
            tag,
          },
        });
      });
    }));
  });
};

exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
  const { createNodeField } = boundActionCreators;

  if (node.internal.type === 'MarkdownRemark') {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: 'slug',
      node,
      value,
    });
  }
};
