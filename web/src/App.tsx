import React from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';

import usePersistedState from './utils/usePersistedState';
import Routes from './routes';

import ThemeSwitcher from './components/ThemeSwitcher';
import light from './assets/styles/theme/light';
import dark from './assets/styles/theme/dark';

import 'leaflet/dist/leaflet.css'

import GlobalStyle from './assets/styles/globalStyles';

function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', dark)

  const toggleTheme = (): void => {
    setTheme(theme.title === 'light' ? dark : light)
  }

  return (
    <ThemeProvider theme={theme}>
      <Routes />
      <ThemeSwitcher toggleTheme={toggleTheme} />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App;