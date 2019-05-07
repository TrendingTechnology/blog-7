import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

// Components
import Helmet from 'react-helmet'
import PostText from './PostText'
import PostTitle from './PostTitle'
import PostInfoBox from './PostInfoBox'
import Box from './Box'
import PostPagination from './PostPagination'
import PostDate from './PostDate'
import PostTag from './PostTag'
import Disqus from './Disqus'
import Layout from './layout'

const BlogPostTemplate = ({ data, pageContext }) => {
  const post = data.markdownRemark
  const { title: siteTitle, siteUrl, disqusShortname } = data.site.siteMetadata
  const { title, tags, date } = post.frontmatter
  const { previous, next, slug } = pageContext

  return (
    <Layout>
      <Box mt="30px">
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
    </Layout>
  )
}

BlogPostTemplate.propTypes = {
  pageContext: PropTypes.shape({
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
