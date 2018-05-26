import styled from 'styled-components';

// Utilites
import { rhythm } from '../../utils/typography';

const Box = styled.div`
  box-shadow: 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12), 0 3px 1px -2px rgba(0,0,0,.2);
  padding: ${rhythm(0.5)};

  @media screen and (max-width: 450px) {
    box-shadow: none;
    padding: ${rhythm(0.1)};
  }
`

export default Box;
