import React from 'react';
import { Map, Marker, TileLayer } from 'react-leaflet';
import { Whatsapp } from '@styled-icons/boxicons-logos';
import { Clock, Info } from '@styled-icons/fa-solid';
import L from 'leaflet';

import mapMarkerImg from '../../assets/images/mark.svg';

import * as S from './styles';
import Sidebar from '../../components/Sidebar';

const happyMapIcon = L.icon({
  iconUrl: mapMarkerImg,

  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [0, -60]
});

function Orphanage() {
  return (
    <S.Container>
      <Sidebar />
      <S.Main>
        <S.DetailsOrphanage>
          <S.MainImg src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg" alt="Lar kuzola" />

          <S.Images>
            <S.MainBtn className="active" type="button">
              <S.Img src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg" alt="Lar kuzola" />
            </S.MainBtn>
             <S.MainBtn type="button">
              <S.Img src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg" alt="Lar kuzola" />
            </S.MainBtn>
             <S.MainBtn type="button">
              <S.Img src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg" alt="Lar kuzola" />
            </S.MainBtn>
             <S.MainBtn type="button">
              <S.Img src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg" alt="Lar kuzola" />
            </S.MainBtn>
             <S.MainBtn type="button">
              <S.Img src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg" alt="Lar kuzola" />
            </S.MainBtn>
             <S.MainBtn type="button">
              <S.Img src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg" alt="Lar kuzola" />
            </S.MainBtn>
          </S.Images>

          <S.DetailsOrphanageContent>
            <S.Title>Lar kuzola</S.Title>
            <S.Text>Preste assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.</S.Text>

            <S.MapContainer>
              <Map
                center={[-27.2092052,-49.6401092]} 
                zoom={16} 
                style={{ width: '100%', height: 280 }}
                dragging={false}
                touchZoom={false}
                zoomControl={false}
                scrollWheelZoom={false}
                doubleClickZoom={false}
              >
                <TileLayer 
                  url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                />
                <Marker interactive={false} icon={happyMapIcon} position={[-27.2092052,-49.6401092]} />
              </Map>

              <S.DetailsFooter>
                <a href="#">Ver rota no Google Maps</a>
              </S.DetailsFooter>
            </S.MapContainer>
            <hr />
            <S.TitleTwo>Instruções para visitas</S.TitleTwo>
            <S.TextTwo>Venha como se sentir mais à vontade e traga muito amor para dar.</S.TextTwo>

            <S.OpenDetails>
              <S.Hour>
                <Clock size={32} color="#15B6D6" />
                Segunda à Sexta <br />
                8h às 18h
              </S.Hour>
              <S.OpenOnWeekends>
                <Info size={32} color="#39CC83" />
                Atendemos <br />
                fim de semana
              </S.OpenOnWeekends>
            </S.OpenDetails>

            <S.ContactBtn type="button">
              <Whatsapp size={20} color="#FFF" />
              Entrar em contato
            </S.ContactBtn>
          </S.DetailsOrphanageContent>
        </S.DetailsOrphanage>
      </S.Main>
    </S.Container>
  )
}

export default Orphanage;