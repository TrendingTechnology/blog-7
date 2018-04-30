import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

import KebabCase from 'kebab-case';

import { rhythm } from '../utils/typography';
import { primary } from '../styles/colors';

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
        marginBottom: rhythm(1 / 4),
      }}
    >
      <Link style={{ boxShadow: 'none' }} to={slug}>
        {title}
      </Link>
    </h3>
    <small>{date}</small>
    {tags && tags.map(tag => (
      <small
        style={{
            marginLeft: rhythm(1 / 5),
            backgroundColor: primary[0],
        }}
        key={tag}
      >
        <Link to={`/tags/${KebabCase(tag)}/`}>
          {tag}
        </Link>
      </small>
    ))}
    <p dangerouslySetInnerHTML={{ __html: excerpt }} />
  </div>
);

PostPreview.propTypes = {
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  excerpt: PropTypes.isRequired,
  tags: PropTypes.isRequired,
  date: PropTypes.isRequired,
};

export default PostPreview;
