import React from 'react';
import styled from 'styled-components';
import { rhythm } from '../utils/typography';
import { getAge } from '../utils/helpers';

import { white, lightGreen } from '../styles/colors';

const myAge = getAge('11.04.1997');

const BioContent = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: ${rhythm(1)};
    background-color: ${white};
    border-top: 1px solid ${lightGreen};
    border-bottom: 1px solid ${lightGreen};

    p {
      text-indent: ${rhythm(0.5)};
      padding: ${rhythm(0.2)};
      margin-bottom: 0;
    }
`;

const Bio = () => (
  <BioContent>
    <p>
      <b>Йо йо йо</b>, вы читаете блог Василия Кузенкова, начинающего frontend разработчика.
      Сейчас мне {myAge}, и живу я в Новосибирске.
    </p>
    <p>
      Здесь пишу о своих идеях, проектах, учебе, жизни и любимой еде.
      Увлекаюсь в основном программированием и интерфейсами,
      а также люблю рэп, аниме, рассказики,
      фентази и научную фантастику.
    </p>
  </BioContent>
);

export default Bio;
