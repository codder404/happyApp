import React, { useState } from 'react';
import { Plus, Sun } from '@styled-icons/boxicons-regular';
import { Map, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import mapMark from '../../assets/images/mark.svg';

import * as S from './styles';

function OrphanagesMap() {
  const [theme, setTheme] = useState('light');

  const changeTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }

  return (
    <S.Container>
      <S.Aside>
        <S.Header>
          <S.OrphanaLogo src={mapMark} alt="Happy" />
          <S.OrphanaTitle>Escolha um orfanato no mapa</S.OrphanaTitle>
          <S.OrphanaText>Muitas crianças estão esperando a sua visita.</S.OrphanaText>
        </S.Header>
        <S.Footer>
          <S.FooterStrong>Vila de Viana</S.FooterStrong>
          <S.FooterSpan>Luanda</S.FooterSpan>
        </S.Footer>
      </S.Aside>
      <Map 
        center={[-8.8971367, 13.3408652]}
        zoom={15}
        style={{ width: '100%', height: '100%' }}
      >
        {/* <TileLayer url="https://a.title.openstreetmap.org/{z}/{x}/{y}.png" /> */}
        <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} />
      </Map>
      
      <S.CreateOrphanage to="/">
        <Plus size={32} color="#fff" />
      </S.CreateOrphanage>
      <S.ChangeTheme onClick={changeTheme}>
        <Sun size={32} color={theme === 'light' ? '#fff' : '#161616' } />
      </S.ChangeTheme>
   </S.Container>
  )
}

export default OrphanagesMap;