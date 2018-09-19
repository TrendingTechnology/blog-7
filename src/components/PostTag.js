import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import kebabCase from 'kebab-case'
import { Link } from 'gatsby'

// Components
// Utilites
import { rhythm } from '../utils/typography'

const TagContainer = styled.small`
  margin-left: ${rhythm(0.2)};
  padding: ${rhythm(0.2)};
`

const TagLink = styled(Link)`
  text-decoration: none;
  color: rgba(0, 0, 0, 0.8);

  &:hover {
    text-decoration: underline;
  }
`

const PostTag = ({ tag }) => (
  <TagContainer>
    <TagLink to={`/tags/${kebabCase(tag)}/`}>{tag}</TagLink>
  </TagContainer>
)

PostTag.propTypes = {
  tag: PropTypes.string.isRequired,
}

export default PostTag
