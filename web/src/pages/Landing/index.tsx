import React from 'react';
import { ArrowRightShort } from '@styled-icons/bootstrap';

import logoImg from '../../assets/images/logo.svg';

import * as S from './styles';

function Landing () {
  return (
    <S.Container>
      <S.ContentWrapper>
        <S.Logo src={logoImg} alt="Happy" />

        <S.LandingMain>
          <S.LandingTitle>Leve felicidade para o mundo</S.LandingTitle>
          <S.LandingText>
            Visite orfanatos e mude o dia de muitas crianças.
          </S.LandingText>
        </S.LandingMain>
        <S.Location>
          <S.LocationStrong>Vila de Viana</S.LocationStrong>
          <S.LocationSpan>Luanda</S.LocationSpan>
        </S.Location>

        <S.EnterApp to="/app">
          <ArrowRightShort />
        </S.EnterApp>
      </S.ContentWrapper>
    </S.Container>
  )
}

export default Landing;