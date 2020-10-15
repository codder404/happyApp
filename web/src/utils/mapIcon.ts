import Leaflet from 'leaflet';

import mapMark from '../assets/images/mark.svg';

const mapIcon = Leaflet.icon({
  iconUrl: mapMark,

  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [178, 2]
});

export default mapIcon;