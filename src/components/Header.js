import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

import SocialNetworksList from './SocialNetworksList';

import { rhythm, scale } from '../utils/typography';

const SiteHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${rhythm(1.2)};
`;

const SiteTitle = styled.h1`
  margin: 0;
`;

const Header = () => (
  <SiteHeader>
    <SiteTitle
      style={{
        ...scale(1.4),
      }}
    >
      <Link
        style={{
          boxShadow: 'none',
          textDecoration: 'none',
          color: 'inherit',
        }}
        to="/"
      >
        Васин блог
      </Link>
    </SiteTitle>
    <SocialNetworksList />
  </SiteHeader>
);

export default Header;
