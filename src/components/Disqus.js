import React from 'react'
import PropTypes from 'prop-types'
import ReactDisqusComments from 'react-disqus-comments'

const Disqus = ({ title, siteUrl, slug, shortname }) => {
  const url = siteUrl + slug
  return (
    <ReactDisqusComments
      identifier={title}
      title={title}
      url={url}
      shortname={shortname}
    />
  )
}

Disqus.propTypes = {
  title: PropTypes.string.isRequired,
  siteUrl: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  shortname: PropTypes.string.isRequired,
}

export default Disqus
