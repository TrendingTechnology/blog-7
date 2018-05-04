import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

// Components
import PostTag from './PostTag';

// Utils
import { rhythm } from '../utils/typography';

const PostPreview = ({
  slug,
  title,
  excerpt,
  tags,
  date,
}) => (
  <div>
    <h3
      style={{
        marginBottom: rhythm(0.1),
      }}
    >
      <Link style={{ boxShadow: 'none' }} to={slug}>
        {title}
      </Link>
    </h3>
    <small>{date}</small>
    {tags && tags.map(tag => (
      <PostTag key={tag} tag={tag} />
    ))}
    { {/* eslint-disable-next-line */} }
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
