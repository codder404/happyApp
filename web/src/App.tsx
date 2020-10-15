import React from 'react';
import 'leaflet/dist/leaflet.css';

import Routes from './routes';
import GlobalStyle from './assets/styles/globalStyles';

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes />
    </>
  );
}

export default App;
