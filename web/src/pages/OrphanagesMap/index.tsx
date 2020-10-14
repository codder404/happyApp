import React from 'react';
import { Link } from 'react-router-dom';
import { Plus } from '@styled-icons/boxicons-regular';
import { ArrowRightShort } from '@styled-icons/bootstrap';
import { Map, TileLayer, Marker } from 'react-leaflet';
import Leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';

import mapMark from '../../assets/images/mark.svg';

import * as S from './styles';

const mapIcon = Leaflet.icon({
  iconUrl: mapMark,

  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [178, 2]
})

function OrphanagesMap() {
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

        <Marker
          icon={mapIcon}
          position={[-8.8971367, 13.3408652]}
        >
          <S.PopUp closeButton={false} minWidth={248} maxWidth={248}>
            Lar kuzola
             <Link to="/orphanage/1">
              <ArrowRightShort size={20} color="#FFF" />
             </Link>
          </S.PopUp>
        </Marker>
      </Map>
      
      <S.CreateOrphanage to="/orphanage/create">
        <Plus size={32} color="#fff" />
      </S.CreateOrphanage>
   </S.Container>
  )
}

export default OrphanagesMap;