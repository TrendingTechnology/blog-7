import React from 'react'
import { rhythm } from '../utils/typography'
import { getAge } from '../utils/helpers'

const myAge = getAge('11.04.1997')

const Bio = () => {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          marginBottom: rhythm(1.5),
        }}
      >
        <p
          style={{
            marginBottom: rhythm(0.5),
          }}
        >
          <b>Йо йо йо</b>, вы читаете блог Василия Кузенкова, начинающего frontend разработчика.
          Сечас мне {myAge}, и живу я в Новосибирске. 
        </p>
        <p
          style={{
            marginBottom: 0,
          }}
        >
          Здесь пишу о своих идеях, проектах, учебе, жизни и любимой еде.
          Увлекаюсь в основном программированием и интерфейсами, а также рэпом, аниме, рассказиками, фентази и научной фантастикой.
        </p>
      </div>
    )
}

export default Bio
