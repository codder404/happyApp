import React from 'react';
import { Plus } from '@styled-icons/fa-solid';
import { Map, Marker, TileLayer } from 'react-leaflet';

import Sidebar from '../../components/Sidebar';
import mapIcon from '../../utils/mapIcon';

import * as S from './styles';

function CreateOrphanage() {
  return (
    <S.Container>
      <Sidebar />
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

              <Marker interactive={false} icon={mapIcon} position={[-27.2092052,-49.6401092]} />
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