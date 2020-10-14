import React from 'react';
import { useHistory } from 'react-router-dom';
import { ArrowLeft, Plus } from '@styled-icons/fa-solid';
import { Map, Marker, TileLayer } from 'react-leaflet';
import L from 'leaflet';

import mapMarkerImg from '../../assets/images/mark.svg';

import * as S from './styles';

const happyMapIcon = L.icon({
  iconUrl: mapMarkerImg,

  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [0, -60]
});

function CreateOrphanage() {
  const { goBack } = useHistory();
  return (
    <S.Container>
      <S.Aside>
        <S.HappyImg src={mapMarkerImg} alt="Happy" />

        <S.Footer>
          <S.OrphButton type="button" onClick={goBack}>
            <ArrowLeft size={24} color="#FFF" />
          </S.OrphButton>
        </S.Footer>
      </S.Aside>

      <S.Main>
        <S.CreateOrphanage>
          <S.FormFieldset>
            <S.FormLegend>Dados</S.FormLegend>

            <Map
              center={[-27.2092052,-49.6401092]} 
              style={{ width: '100%', height: 280 }}
              zoom={15}
            >
              <TileLayer 
                url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
              />

              <Marker interactive={false} icon={happyMapIcon} position={[-27.2092052,-49.6401092]} />
            </Map>

            <S.InputBlock>
              <S.InputLabel htmlFor="name">Nome</S.InputLabel>
              <S.Input id="name" />
            </S.InputBlock>
            <S.InputBlock>
              <S.InputLabel htmlFor="about">
                Sobre <S.Span>Máximo de 300 caracteres</S.Span>
              </S.InputLabel>
              <S.InputTextarea id="name" maxLength={300} />
            </S.InputBlock>

            <S.InputBlock>
              <S.InputLabel>Fotos</S.InputLabel>

              <S.UploadedImages></S.UploadedImages>

              <S.NewImage>
                <Plus size={24} color="#15b6d6" />
              </S.NewImage>
            </S.InputBlock>
          </S.FormFieldset>

          <S.FormFieldset>
            <S.FormLegend>Visitação</S.FormLegend>

            <S.InputBlock>
              <S.InputLabel htmlFor="instructions">Instruções</S.InputLabel>
              <S.InputTextarea id="instructions" />
            </S.InputBlock>

            <S.InputBlock>
              <S.InputLabel htmlFor="opening_hours">Nome</S.InputLabel>
              <S.Input id="opening_hours" />
            </S.InputBlock>

            <S.InputBlock>
              <S.InputLabel htmlFor="open_on_Weekends">Atende fim de semana</S.InputLabel>

              <S.ButtonSelect>
                <S.SelectBtn type="button" className="active">
                  Sim
                </S.SelectBtn>
                <S.SelectBtn type="button">Não</S.SelectBtn>
              </S.ButtonSelect>
            </S.InputBlock>
          </S.FormFieldset>

          <S.ConfirmButton type="submit">
            Confirmar
          </S.ConfirmButton>
        </S.CreateOrphanage>
      </S.Main>
    </S.Container>
  )
}

export default CreateOrphanage;