import styled from 'styled-components'

const PostText = styled.article`
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
`

export default PostText
