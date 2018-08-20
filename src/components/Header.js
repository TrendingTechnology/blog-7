import React from 'react'
import styled from 'styled-components'

// Components
import Link from 'gatsby-link'
import SocialNetworksList from './SocialNetworksList'

// Utilites
import { scale } from '../utils/typography'

const SiteHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 4px 8px 4px;

  @media screen and (max-width: 450px) {
    flex-direction: column;
  }
`

const SiteTitle = styled.h1`
  margin: 0;
`

const TitleLink = styled(Link)`
  ${scale(1.4)} box-shadow: none;
  text-decoration: none;
  color: inherit;
`

const Header = () => (
  <SiteHeader>
    <SiteTitle>
      <TitleLink to="/">Васин блог</TitleLink>
    </SiteTitle>
    <SocialNetworksList />
  </SiteHeader>
)

export default Header
