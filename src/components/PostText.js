import styled from 'styled-components';

export default styled.article`
  display: flex;
  flex-direction: column;
  margin-bottom: 0;

  a {
    :hover {
      text-decoration: none;
    }
  }

  > :last-child {
    margin-bottom: 0;
  }
`;
