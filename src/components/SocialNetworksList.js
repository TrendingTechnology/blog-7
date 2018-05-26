import React from 'react';
import styled from 'styled-components';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

import faVk from '@fortawesome/fontawesome-free-brands/faVk';
import faTelegramPlane from '@fortawesome/fontawesome-free-brands/faTelegramPlane';
import faGithub from '@fortawesome/fontawesome-free-brands/faGithub';
import faEnvelope from '@fortawesome/fontawesome-free-solid/faEnvelope';
import faRss from '@fortawesome/fontawesome-free-solid/faRss';

const socialNetworks = [
  {
    type: 'tg',
    title: 'Telegram',
    link: 'https://telegram.me/bondian0',
    icon: faTelegramPlane,
  },
  {
    type: 'vk',
    title: 'Вконтакте',
    link: 'https://vk.com/bondian0',
    icon: faVk,
  },
  {
    type: 'gh',
    title: 'Github',
    link: 'https://github.com/bondiano',
    icon: faGithub,
  },
  {
    type: 'mail',
    title: 'Письмо',
    link: 'mailto:batbondik0@gmail.com?subject=From blog',
    icon: faEnvelope,
  },
  {
    type: 'rss',
    title: 'RSS',
    link: './rss.xml',
    icon: faRss,
  },
];

const SocialNetworksWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const SocialNetworkLink = styled.a`
    cursor: pointer;
    color: inherit !important;
    padding-right: 10px;

  &:hover {
    color: hsla(0, 0%, 0%, 1) !important;
  }

  &:last-child {
    padding-right: 0
  }
`;

const SocialNetworksList = () => (
  <SocialNetworksWrapper>
    {socialNetworks.map(sn => (
      <SocialNetworkLink
        key={sn.type}
        target="_blank"
        rel="nofollow noopener noreferrer"
        title={sn.title}
        href={sn.link}
      >
        <FontAwesomeIcon icon={sn.icon} size="lg" />
      </SocialNetworkLink>
    ))}
  </SocialNetworksWrapper>
);

export default SocialNetworksList;
