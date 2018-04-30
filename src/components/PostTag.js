import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import KebabCase from 'kebab-case';
import Link from 'gatsby-link';

import { blue, darkBlue, lightBlue } from '../styles/colors';
import { rhythm } from '../utils/typography';

const TagContainer = styled.small`
  margin-left: ${rhythm(1 / 5)};
  background-color: ${lightBlue};
  padding: 2px;
`;

const TagLink = styled(Link)`
  text-decoration: none;
  color: ${blue};

  &:hover {
    color: ${darkBlue};
  }
`;

const PostTag = ({ tag }) => (
  <TagContainer>
    <TagLink
      to={`/tags/${KebabCase(tag)}/`}
    >
      {tag}
    </TagLink>
  </TagContainer>
);

PostTag.propTypes = {
  tag: PropTypes.string.isRequired,
};

export default PostTag;
