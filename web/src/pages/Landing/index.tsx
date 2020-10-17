import React from 'react';
import { ArrowRightShort } from '@styled-icons/bootstrap';
import logoImg from '../../assets/images/logo.svg';

import { PageLanding, ContentWrapper, Location, EnterApp } from './styles';

const Landing: React.FC = () => {
  return (
    <PageLanding>
      <ContentWrapper>
        <img src={logoImg} alt="Happy" />

        <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>
        </main>

        <Location>
          <strong>Luanda</strong>
          <span>Vila de Viana</span>
        </Location>
        <EnterApp to="/app">
          <ArrowRightShort size={26} color="rgba(0,0,0,0.6)" />
        </EnterApp>
      </ContentWrapper>
    </PageLanding>
  )
}

export default Landing;