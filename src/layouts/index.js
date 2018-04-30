import React from 'react';
import PropTypes from 'prop-types';

// Components
import Header from '../components/Header';

// Styles
import '../asserts/fonts/fira-sans-condensed/firasanscondensed.css';
import '../asserts/fonts/roboto-slab/robotoslab.css';

// Utils
import { rhythm } from '../utils/typography';

const Template = ({ children }) => (
  <div
    style={{
        marginLeft: 'auto',
        marginRight: 'auto',
        maxWidth: rhythm(30),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
  >
    <Header />
    {children()}
  </div>
);

Template.propTypes = {
  children: PropTypes.func.isRequired,
};

export default Template;
