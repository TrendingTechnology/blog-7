import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';

// Components
import Bio from '../components/Bio';
import PostPreview from '../components/PostPreview';
import Layout from '../components/layout';

const PostPreviewList = ({ posts }) => posts.map(({ node }) => (
  <PostPreview
    date={node.frontmatter.date}
    excerpt={node.excerpt}
    key={node.fields.slug}
    slug={node.fields.slug}
    tags={node.frontmatter.tags}
    title={node.frontmatter.title}
  />
));

const BlogIndex = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title;
  const posts = data.allMarkdownRemark.edges;
  return (
    <Layout>
      <Helmet title={siteTitle} />
      <Bio />
      <PostPreviewList posts={posts} />
    </Layout>
  );
};

BlogIndex.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
    }).isRequired,
  }).isRequired,
};

export default BlogIndex;

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
            tags
          }
        }
      }
    }
  }
`;
