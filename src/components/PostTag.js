import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import KebabCase from 'kebab-case';
import Link from 'gatsby-link';
import { secondary, primary, primaryVariant } from '../utils/colors';

const TagContainer = styled.small`
  margin-left: 10px;
  background-color: ${secondary};
  padding: 2px;
`;

const TagLink = styled(Link)`
  text-decoration: none;
  color: ${primary};

  &:hover {
    color: ${primaryVariant};
  }
`;

const PostTag = ({ tag }) => (
  <TagContainer>
    <TagLink to={`/tags/${KebabCase(tag)}/`}>
      {tag}
    </TagLink>
  </TagContainer>
);

PostTag.propTypes = {
  tag: PropTypes.string.isRequired,
};

export default PostTag;
