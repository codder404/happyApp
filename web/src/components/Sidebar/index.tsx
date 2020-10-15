import React from 'react';
import { ArrowLeft } from '@styled-icons/fa-solid';
import { useHistory } from 'react-router-dom';

import mapMarkerImg from '../../assets/images/mark.svg';

import * as S from './styles';

export default function Sidebar() {
  const { goBack } = useHistory();
  return (
    <S.Aside>
      <S.HappyImg src={mapMarkerImg} alt="Happy" />

      <S.Footer>
        <S.OrphButton type="button" onClick={goBack}>
          <ArrowLeft size={24} color="#FFF" />
        </S.OrphButton>
      </S.Footer>
    </S.Aside>
  )
}