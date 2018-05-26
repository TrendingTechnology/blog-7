import styled from 'styled-components';
import PropTypes from 'prop-types';

// Utilites
import { rhythm } from '../../utils/typography';

const PostInfoBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: ${rhythm(0.2)} 0;
  justify-content: ${props => props.align}
`;

PostInfoBox.defaultProps = {
  align: 'flex-start'
};

PostInfoBox.propTypes = {
  align: PropTypes.string
};

export default PostInfoBox;
