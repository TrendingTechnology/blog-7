import React from 'react';
import Link from 'gatsby-link';
import { rhythm } from '../utils/typography';
import { primary } from '../styles/colors';

const PostPreview = ({
  slug, title, excerpt, tags, date,
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
        {tag}
      </small>
            ))}
    <p dangerouslySetInnerHTML={{ __html: excerpt }} />
  </div>
);

export default PostPreview;
