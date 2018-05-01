import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Components
import Header from '../components/Header';

import { blue, darkBlue } from '../styles/colors';

// Utils
import { rhythm } from '../utils/typography';

const MainWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: ${rhythm(34)};
  padding: ${rhythm(1.5)} ${rhythm(3 / 4)};

  @media screen and (max-width: 450px) {
    padding: ${rhythm(0.5)} ${rhythm(0.5)};
  }

  a {
    color: ${darkBlue};

    &:hover {
      color: ${blue};
    }
  }
`;

const Template = ({ children }) => (
  <MainWrapper>
    <Header />
    {children()}
  </MainWrapper>
);

Template.propTypes = {
  children: PropTypes.func.isRequired,
};

export default Template;
