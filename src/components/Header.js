import React, {Fragment} from 'react'
import Link from 'gatsby-link'

import { rhythm, scale } from '../utils/typography'

const Header = () => {
    return (
        <Fragment>
          <h1
            style={{
              ...scale(1.4),
              marginBottom: rhythm(1.4),
              marginTop: 0,
            }}
          >
            <Link
              style={{
                boxShadow: 'none',
                textDecoration: 'none',
                color: 'inherit',
              }}
              to={'/'}
            >
              Блог Васи
            </Link>
          </h1>
        </Fragment>
    )
}

export default Header