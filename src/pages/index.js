import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Bio from '../components/Bio';
import PostPreview from '../components/PostPreview';

const BlogIndex = (props) => {
  const { title: siteTitle } = props.data.site.siteMetadata;
  const { edges: posts } = props.data.allMarkdownRemark;
  return (
    <Fragment>
      <Helmet title={siteTitle} />
      <Bio />

      {posts.map(({ node }) => {
        const { title } = node.frontmatter;
        return (
          <PostPreview
            key={node.fields.slug}
            slug={node.fields.slug}
            title={title}
            excerpt={node.excerpt}
            tags={node.frontmatter.tags}
            date={node.frontmatter.date}
          />
        );
      })}
    </Fragment>
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