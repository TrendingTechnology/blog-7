import styled from 'styled-components';
import PropTypes from 'prop-types';

const PostInfoBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 5px 0;
  justify-content: ${props => props.align};
`;

PostInfoBox.defaultProps = {
  align: 'flex-start',
};

PostInfoBox.propTypes = {
  align: PropTypes.string,
};

export default PostInfoBox;
