import React, {Component, Fragment} from 'react'
import Helmet from 'react-helmet'

import '../asserts/fonts/fira-sans-condensed/firasanscondensed.css';
import '../asserts/fonts/roboto-slab/robotoslab.css';

import Header from '../components/Header'
import Bio from '../components/Bio'
import PostPreview from '../components/PostPreview'

class BlogIndex extends Component {
  render() {
    const { location, children } = this.props
    const {title: siteTitle} = this.props.data.site.siteMetadata
    const {edges: posts} = this.props.data.allMarkdownRemark
  
    return (
      <Fragment>
        <Helmet title={siteTitle} />

        <Header />
        <Bio />
        
        {posts.map(({ node }) => {
          const {title} = node.frontmatter
          return (
            <PostPreview 
              key={node.fields.slug}
              slug={node.fields.slug}
              title={title}
              excerpt={node.excerpt}
              tags={node.frontmatter.tags}
              date={node.frontmatter.date}
            />
          )
        })}
      </Fragment>
    )
  }
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
