import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

// Components
import Helmet from 'react-helmet'
import PostPagination from '../components/PostPagination'
import PostDate from '../components/PostDate'
import PostTag from '../components/PostTag'
import Disqus from '../components/Disqus'
import { Box, PostText, PostTitle, PostInfoBox } from '../components/kit'

const BlogPostTemplate = props => {
  const post = props.data.markdownRemark
  const {
    title: siteTitle,
    siteUrl,
    disqusShortname,
  } = props.data.site.siteMetadata
  const { title, tags, date } = post.frontmatter
  const { previous, next, slug } = props.pathContext

  return (
    <Fragment>
      <Box>
        <Helmet title={`${title} | ${siteTitle}`} />
        <PostTitle>{title}</PostTitle>
        <PostInfoBox align="flex-end">
          <PostDate date={date} />
          {tags && tags.map(tag => <PostTag key={tag} tag={tag} />)}
        </PostInfoBox>
        <PostText dangerouslySetInnerHTML={{ __html: post.html }} />
      </Box>
      {(previous || next) && <PostPagination previous={previous} next={next} />}
      <Disqus
        title={title}
        siteUrl={siteUrl}
        slug={slug}
        shortname={disqusShortname}
      />
    </Fragment>
  )
}

BlogPostTemplate.propTypes = {
  pathContext: PropTypes.shape({
    previous: PropTypes.isRequired,
    next: PropTypes.isRequired,
  }).isRequired,
  data: PropTypes.shape({
    markdownRemark: PropTypes.isRequired,
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
        siteUrl
        disqusShortname
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        tags
      }
    }
  }
`
