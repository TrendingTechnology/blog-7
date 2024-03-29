import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Header from './Header'

import { rhythm } from '../utils/typography'

const MainWrapper = styled.main`
  margin-left: auto;
  margin-right: auto;
  max-width: ${rhythm(34)};
  padding: ${rhythm(1.2)} ${rhythm(0.65)} 0 ${rhythm(0.65)};

  @media screen and (max-width: 450px) {
    padding: ${rhythm(0.5)} ${rhythm(0.5)};
  }
`

const Template = ({ children }) => (
  <MainWrapper>
    <Header />
    {children}
  </MainWrapper>
)

Template.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}

export default Template
