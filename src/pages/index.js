import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

// Components
import Bio from '../components/Bio'
import PostPreview from '../components/PostPreview'

const PostPreviewList = ({ posts }) =>
  posts.map(({ node }) => (
    <PostPreview
      date={node.frontmatter.date}
      excerpt={node.excerpt}
      key={node.fields.slug}
      slug={node.fields.slug}
      tags={node.frontmatter.tags}
      title={node.frontmatter.title}
    />
  ))

const BlogIndex = props => {
  const siteTitle = props.data.site.siteMetadata.title
  const posts = props.data.allMarkdownRemark.edges
  return (
    <Fragment>
      <Helmet title={siteTitle} />
      <Bio />
      <PostPreviewList posts={posts} />
    </Fragment>
  )
}

BlogIndex.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
    }).isRequired,
  }).isRequired,
}

export default BlogIndex

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
            tags
          }
        }
      }
    }
  }
`
