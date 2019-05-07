import styled from 'styled-components'

export default styled.div`
  padding: 8px;
  margin-bottom: 8px;
  margin-top: ${props => props.mt || 0};

  > :last-child {
    margin-bottom: 0;
  }

  @media screen and (max-width: 450px) {
    box-shadow: none;
    padding: 2px;
  }
`
