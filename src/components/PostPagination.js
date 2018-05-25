import React from 'react';
import PropTypes from 'prop-types';

import Link from 'gatsby-link';
import styled from 'styled-components';

const PaginationWrapper = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    list-style: none;
    padding: 0;
`;
const PostPagination = ({ previous, next }) => (
  <PaginationWrapper>
    {previous && (
      <li>
        <Link to={previous.fields.slug} rel="prev">
          ← {previous.frontmatter.title}
        </Link>
      </li>
    )}

    {next && (
      <li>
        <Link to={next.fields.slug} rel="next">
          {next.frontmatter.title} →
        </Link>
      </li>
    )}
  </PaginationWrapper>
);

PostPagination.propTypes = {
  previous: PropTypes.isRequired,
  next: PropTypes.isRequired,
};

export default PostPagination;
