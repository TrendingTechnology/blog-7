import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Components
import Link from 'gatsby-link';
import PostTag from './PostTag';
import PostDate from './PostDate';
import { Box, PostInfoBox } from './kit';

// Utilites
import { scale } from '../utils/typography';
import { primary, primaryVariant } from '../utils/colors';

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

const PreviewText = styled.p`
  margin-bottom: 0;
`;

const PostPreview = ({
  slug,
  title,
  excerpt,
  tags,
  date,
}) => (
  <Box>
    <PostTitle>
      <PostTitleLink to={slug}>
        {title}
      </PostTitleLink>
    </PostTitle>

    <PostInfoBox>
      <PostDate date={date} />
      {tags && tags.map(tag => (
        <PostTag key={tag} tag={tag} />
      ))}
    </PostInfoBox>

    <PreviewText dangerouslySetInnerHTML={{ __html: excerpt }} />
  </Box>
);

PostPreview.propTypes = {
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  date: PropTypes.string.isRequired,
};

export default PostPreview;
