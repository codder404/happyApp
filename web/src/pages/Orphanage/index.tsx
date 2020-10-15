import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Map, Marker, TileLayer } from 'react-leaflet';
import { Whatsapp } from '@styled-icons/boxicons-logos';
import { Clock, Info } from '@styled-icons/fa-solid';

import api from '../../services/api';
import Sidebar from '../../components/Sidebar';
import mapIcon from '../../utils/mapIcon';

import * as S from './styles';

interface Orphanage {
  latitude: number;
  longitude: number;
  name: string;
  about: string;
  instructions: string;
  opening_hours: string;
  open_on_weekends: string;
  images: Array<{
    id: number;
    url: string;
  }>;
}

interface OrphanageParams {
  id: string;
}

function Orphanage() {
  const params = useParams<OrphanageParams>();
  const [orphanage, setOrphanage] = useState<Orphanage>();
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    api.get(`orphanages/${params.id}`).then(response => {
      setOrphanage(response.data);
    })
  }, [params.id]);

  if (!orphanage) {
    return <p>Carregando...</p>
  }
  return (
    <S.Container>
      <Sidebar />
      <S.Main>
        <S.DetailsOrphanage>
          <S.MainImg src={orphanage?.images[activeImageIndex].url} alt={orphanage?.name} />

          <S.Images>
            {orphanage.images.map((image, index) => {
              return (
                <S.MainBtn
                  key={image.id}
                  className={activeImageIndex === index ? 'active' : ''}
                  type="button"
                  onClick={() => {
                    setActiveImageIndex(index);
                  }}
                >
                  <S.Img src={image.url} alt={orphanage.name} />
                </S.MainBtn>
              )
            })}
          </S.Images>

          <S.DetailsOrphanageContent>
            <S.Title>{orphanage.name}</S.Title>
            <S.Text>
              {orphanage.about}
            </S.Text>

            <S.MapContainer>
              <Map
                center={[orphanage.latitude, orphanage.longitude]} 
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
                <Marker interactive={false} icon={mapIcon} position={[orphanage.latitude, orphanage.longitude]} />
              </Map>

              <S.DetailsFooter>
                <a target="_blank" rel="noopener noreferrer" href={`https://www.google.com/maps/dir/?api=1&destination=${orphanage.latitude}, ${orphanage.longitude}`}>Ver rota no Google Maps</a>
              </S.DetailsFooter>
            </S.MapContainer>
            <hr />
            <S.TitleTwo>Instruções para visitas</S.TitleTwo>
            <S.TextTwo>
              {orphanage.instructions}
            </S.TextTwo>

            <S.OpenDetails>
              <S.Hour>
                <Clock size={32} color="#15B6D6" />
                Segunda à Sexta <br />
                {orphanage.opening_hours}
              </S.Hour>
              {orphanage.open_on_weekends ? (
                <S.OpenOnWeekends>
                  <Info size={32} color="#39CC83" />
                  Atendemos <br />
                  fim de semana
                </S.OpenOnWeekends>
              ) : (
                <S.OpenOnWeekends className="dont_open">
                  <Info size={32} color="#FF6690" />
                  Não atendemos<br />
                  fim de semana
                </S.OpenOnWeekends>
             )}
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