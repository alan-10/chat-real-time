import React from 'react';

import Globalstyle from './styles/Global';

import { ThemeProvider } from 'styled-components';
import light from './styles/themes/light';
import dark from './styles/themes/dark';

import Context from './Context/AuthContext';
import UserPersistedState from './utils/UserPersistedState';

import Routes from './routes';


function App() {
  const [theme, setTheme] = UserPersistedState('theme',light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  }

  return (
    
    <ThemeProvider theme={theme}>
      <Globalstyle />
      <Context.Provider value={{ toggleTheme }}>
        <Routes />
      </Context.Provider>
    </ThemeProvider>
    
  );
}

export default App;
