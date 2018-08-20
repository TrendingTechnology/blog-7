import React from 'react';
import PropTypes from 'prop-types';

const PostDate = ({ date }) => <small>{date} //</small>;

PostDate.propTypes = {
  date: PropTypes.string.isRequired,
};

export default PostDate;
