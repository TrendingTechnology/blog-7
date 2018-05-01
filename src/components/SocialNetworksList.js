import React from 'react';
import styled from 'styled-components';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

import faVk from '@fortawesome/fontawesome-free-brands/faVk';
import faTelegramPlane from '@fortawesome/fontawesome-free-brands/faTelegramPlane';
import faGithub from '@fortawesome/fontawesome-free-brands/faGithub';
import faEnvelope from '@fortawesome/fontawesome-free-solid/faEnvelope';
import faRss from '@fortawesome/fontawesome-free-solid/faRss';

const SocialNetworksWrapper = styled.div`
  display: flex;
  flex-direction: row;

  a {
    cursor: pointer;
    color: inherit !important;
    padding-right: 10px;
  }

  a:hover {
    color: hsla(0, 0%, 0%, 1) !important;
  }

  a:last-child {
    padding-right: 0
  }
`;

const SocialNetworksList = () => (
  <SocialNetworksWrapper>
    <a
      target="_blank"
      rel="nofollow noopener noreferrer"
      title="Telegram"
      href="https://telegram.me/bondian0"
    >
      <FontAwesomeIcon icon={faTelegramPlane} size="lg" />
    </a>

    <a
      target="_blank"
      rel="nofollow noopener noreferrer"
      title="Вконтакте"
      href="https://vk.com/bondian0"
    >
      <FontAwesomeIcon icon={faVk} size="lg" />
    </a>

    <a
      target="_blank"
      rel="nofollow noopener noreferrer"
      title="Github"
      href="https://github.com/bondiano"
    >
      <FontAwesomeIcon icon={faGithub} size="lg" />
    </a>

    <a
      title="Письмо"
      href="mailto:batbondik0@gmail.com?subject=Важное сообщение"
    >
      <FontAwesomeIcon icon={faEnvelope} size="lg" />
    </a>

    <a
      title="RSS"
      href="./rss.xml"
    >
      <FontAwesomeIcon icon={faRss} size="lg" />
    </a>
  </SocialNetworksWrapper>
);

export default SocialNetworksList;
