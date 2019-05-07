import React from 'react'
import PropTypes from 'prop-types'

// Components
import { Link } from 'gatsby'
import styled from 'styled-components'

const PaginationWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  flex-direction: row;
  list-style: none;
  font-size: 80%;
  padding: 0;
  margin: 0;
`

const PaginationLink = styled(Link)`
  margin-bottom: 0;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`

const Arrow = styled.p`
  margin-bottom: 0;
`

const Pagination = styled.li`
  display: flex;
  flex-direction: row;
  align-content: center;
  margin-bottom: 0;
`

const PostPagination = ({ previous, next }) => (
  <PaginationWrapper>
    {previous && (
      <Pagination>
        <Arrow>←</Arrow>
        <PaginationLink to={previous.fields.slug} rel="prev">
          {previous.frontmatter.title}
        </PaginationLink>
      </Pagination>
    )}

    {next && (
      <Pagination>
        <PaginationLink to={next.fields.slug} rel="next">
          {next.frontmatter.title}
        </PaginationLink>
        <Arrow>→</Arrow>
      </Pagination>
    )}
  </PaginationWrapper>
)

/* eslint-disable react/require-default-props */
PostPagination.propTypes = {
  previous: PropTypes.shape({
    frontmatter: PropTypes.shape({
      title: PropTypes.string.isRequired,
    }).isRequired,
    fields: PropTypes.shape({
      slug: PropTypes.string.isRequired,
    }).isRequired,
  }),
  next: PropTypes.shape({
    frontmatter: PropTypes.shape({
      title: PropTypes.string.isRequired,
    }).isRequired,
    fields: PropTypes.shape({
      slug: PropTypes.string.isRequired,
    }).isRequired,
  }),
}
/* eslint-enable react/require-default-props */

export default PostPagination
