import React from 'react'
import { rhythm } from '../utils/typography'

function Bio () {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5),
        }}
      >
        <p>
          <b>Йо йо йо</b>, вы читаете блог Василия Кузенкова. Мне 21, работаю разработчиком. 
          Здесь пишу о своих проектах, учебе, жизни и любимой еде.
          Увлекаюсь в основном программированием, а также рэпом, рассказиками, фентази и научной фантастикой.
        </p>
      </div>
    )
}

export default Bio
