import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Link from 'gatsby-link';
import { primary, primaryVariant } from '../utils/colors';
// Components
import PostTag from './PostTag';
import PostDate from './PostDate';

// Utilites
import { scale } from '../utils/typography';

const PostTitle = styled.h3`
  ${scale(0.5)}
  margin-bottom: 0;
`;

const PostTitleLink = styled(Link)`
  color: ${primaryVariant};

  &:hover {
    color: ${primary};
  }
`;

const PostPreview = ({
  slug,
  title,
  excerpt,
  tags,
  date,
}) => (
  <div>
    <PostTitle>
      <PostTitleLink to={slug}>
        {title}
      </PostTitleLink>
    </PostTitle>
    <PostDate date={date} />
    {tags && tags.map(tag => (
      <PostTag key={tag} tag={tag} />
    ))}
    <p dangerouslySetInnerHTML={{ __html: excerpt }} />
  </div>
);

PostPreview.propTypes = {
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  date: PropTypes.string.isRequired,
};

export default PostPreview;
