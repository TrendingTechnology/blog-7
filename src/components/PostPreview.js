import React from 'react'
import Link from 'gatsby-link'
import { rhythm } from '../utils/typography'

const PostPreview = ({slug, title, excerpt, tags, date}) => {
    return (
        <div key={slug}>
            <h3
                style={{
                    marginBottom: rhythm(1 / 4)
                }}
            >
                <Link style={{ boxShadow: 'none' }} to={slug}>
                {title}
                </Link>
            </h3>
            <small>{date}</small>
            {tags && tags.map((tag) => (
                <small 
                    style={{
                        paddingLeft: rhythm(1 / 5)
                    }} 
                    key={tag}
                >
                    {tag}
                </small>
            ))}
            <p dangerouslySetInnerHTML={{ __html: excerpt }} />
        </div>
    )
}

export default PostPreview