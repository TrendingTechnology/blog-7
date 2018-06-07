import styled from 'styled-components';

const Box = styled.div`
  box-shadow: 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12), 0 3px 1px -2px rgba(0,0,0,.2);
  padding: 8px;
  margin-bottom: 8px;

  > :last-child {
    margin-bottom: 0;
  }

  @media screen and (max-width: 450px) {
    box-shadow: none;
    padding: 2px;
  }
`;

export default Box;
