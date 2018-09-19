import React from 'react';
import styled from 'styled-components';

// Utilites
import { getAge } from '../utils/helpers';
import { rhythm } from '../utils/typography';

const myAge = getAge('11.04.1997');

const BioContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;
  padding: 5px;
`;

const Text = styled.p`
  text-indent: ${rhythm(0.5)};
  margin-bottom: 0;
`;

const Bio = () => (
  <BioContent>
    <Text>
      <b>Йо йо йо</b>
, вы читаете блог Василия Кузенкова, начинающего frontend
      разработчика. Сейчас мне
      {myAge}
, и живу я в Новосибирске.
    </Text>
    <Text>
      Здесь пишу о своих идеях, проектах, учебе, жизни и любимой еде. Увлекаюсь
      в основном программированием и интерфейсами, а также люблю рэп, аниме,
      рассказики, фентази и научную фантастику.
    </Text>
  </BioContent>
);

export default Bio;
