import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

// Components
import Helmet from 'react-helmet';

import PostPagination from '../components/PostPagination';

const BlogPostTemplate = (props) => {
  const post = props.data.markdownRemark;
  const { title: siteTitle } = props.data.site.siteMetadata;
  const { previous, next } = props.pathContext;

  return (
    <Fragment>
      <Helmet title={`${post.frontmatter.title} | ${siteTitle}`} />
      <h2>{post.frontmatter.title}</h2>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
      <PostPagination previous={previous} next={next} />
    </Fragment>
  );
};

BlogPostTemplate.propTypes = {
  pathContext: PropTypes.shape({
    previous: PropTypes.isRequired,
    next: PropTypes.isRequired,
  }).isRequired,
  data: PropTypes.shape({
    markdownRemark: PropTypes.isRequired,
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        tags
      }
    }
  }
`;
