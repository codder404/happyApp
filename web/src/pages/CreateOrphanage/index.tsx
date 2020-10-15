import React, { ChangeEvent, FormEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Plus } from '@styled-icons/fa-solid';
import { Map, Marker, TileLayer } from 'react-leaflet';
import { LeafletMouseEvent} from 'leaflet';

import api from '../../services/api';

import Sidebar from '../../components/Sidebar';
import mapIcon from '../../utils/mapIcon';

import * as S from './styles';

function CreateOrphanage() {
  const history = useHistory();

  const [position, setPosition] = useState({ latitude: 0, longitude: 0 });
  const [name, setName] = useState('');
  const [about, setAbout] = useState('');
  const [instructions, setInstructions] = useState('');
  const [opening_hours, setOpeningHours] = useState('');
  const [opening_on_Weekends, setOpeningOnWeekends] = useState(true);
  const [images, setImages] = useState<File[]>([]);
  const [previewImages, setPreviewImages] = useState<string[]>([])

  function handleMapClick (event: LeafletMouseEvent) {
    const { lat, lng } = event.latlng;
    
    setPosition({
      latitude: lat,
      longitude: lng
    })
  }

   function handleSelectImage(event: ChangeEvent<HTMLInputElement>) {
     if (!event.target.files) {
       return;
     }
     
     const selectedImages = Array.from(event.target.files);

     setImages(selectedImages);

     const selectedImagePreview = selectedImages.map(image => {
       return URL.createObjectURL(image);
     })

     setPreviewImages(selectedImagePreview)
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const { latitude, longitude} = position;
    const data = new FormData();

    data.append('name', name);
    data.append('about', about);
    data.append('instructions', instructions);
    data.append('opening_hours', opening_hours);
    data.append('latitude', String(latitude));
    data.append('longitude', String(longitude));
    data.append('opening_on_Weekends', String(opening_on_Weekends));

    images.forEach(image => {
      data.append('image', image);
    })

    await api.post('orphanages', data)

    console.log('Cadastro realizado com sucesso');

    history.push('/app');
  }

  return (
    <S.Container>
      <Sidebar />
      <S.Main>
        <S.CreateOrphanage onSubmit={handleSubmit}>
          <S.FormFieldset>
            <S.FormLegend>Dados</S.FormLegend>

            <Map
              center={[-27.2092052,-49.6401092]} 
              style={{ width: '100%', height: 280 }}
              zoom={15}
              onclick={handleMapClick}
            >
              <TileLayer 
                url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
              />

              {position.latitude !== 0 && (
                <Marker
                  interactive={false}
                  icon={mapIcon}
                  position={[position.latitude, position.longitude]}
                />
              )}
              
            </Map>

            <S.InputBlock>
              <S.InputLabel htmlFor="name">Nome</S.InputLabel>
              <S.Input
                id="name"
                value={name}
                onChange={event => setName(event.target.value)}
              />
            </S.InputBlock>
            <S.InputBlock>
              <S.InputLabel htmlFor="about">
                Sobre <S.Span>Máximo de 300 caracteres</S.Span>
              </S.InputLabel>
              <S.InputTextarea
                id="name"
                maxLength={300}
                value={about}
                onChange={event => setAbout(event.target.value)}
              />
            </S.InputBlock>

            <S.InputBlock>
              <S.InputLabel>Fotos</S.InputLabel>


              <S.ImageContainer>
                {previewImages.map(image => {
                  return (
                    <S.ImagePreview key={image} src={image} alt={name} />
                  )
                })}
                <S.NewImageLabel htmlFor="image[]">
                  <Plus size={24} color="#15b6d6" />
                </S.NewImageLabel>
              </S.ImageContainer>
              
              <S.NewImageInput
                multiple
                onChange={handleSelectImage}
                type="file" id="image[]" />
            </S.InputBlock>
          </S.FormFieldset>

          <S.FormFieldset>
            <S.FormLegend>Visitação</S.FormLegend>

            <S.InputBlock>
              <S.InputLabel htmlFor="instructions">Instruções</S.InputLabel>
              <S.InputTextarea
                id="instructions"
                value={instructions}
                onChange={event => setInstructions(event.target.value)}
              />
            </S.InputBlock>

            <S.InputBlock>
              <S.InputLabel htmlFor="opening_hours">Nome</S.InputLabel>
              <S.Input
                id="opening_hours"
                value={opening_hours}
                onChange={event => setOpeningHours(event.target.value)}
              />
            </S.InputBlock>

            <S.InputBlock>
              <S.InputLabel htmlFor="open_on_Weekends">Atende fim de semana</S.InputLabel>

              <S.ButtonSelect>
                <S.SelectBtn
                  type="button"
                  className={opening_on_Weekends ? 'active' : ''}
                  onClick={() => setOpeningOnWeekends(true)}
                >
                  Sim
                </S.SelectBtn>
                <S.SelectBtn
                  type="button"
                  className={!opening_on_Weekends ? 'active' : ''}
                  onClick={() => setOpeningOnWeekends(false)}
                >
                  Não
                </S.SelectBtn>
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