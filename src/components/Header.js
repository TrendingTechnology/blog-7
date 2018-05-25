import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

import SocialNetworksList from './SocialNetworksList';

import { rhythm, scale } from '../utils/typography';

const SiteHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 ${rhythm(0.3)} ${rhythm(0.5)} ${rhythm(0.3)};

  @media screen and (max-width: 450px) {
    flex-direction: column;
  }
`;

const SiteTitle = styled.h1`
  margin: 0;
`;

const TitleLink = styled(Link)`
    ${scale(1.4)}
    box-shadow: none;
    text-decoration: none;
    color: inherit;
`;

const Header = () => (
  <SiteHeader>
    <SiteTitle>
      <TitleLink to="/">
        Васин блог
      </TitleLink>
    </SiteTitle>
    <SocialNetworksList />
  </SiteHeader>
);

export default Header;
