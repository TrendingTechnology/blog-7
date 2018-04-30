import React from 'react';

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
    {children()}
  </div>
);

export default Template;
