import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { 
  BrowserRouter,
  Routes as Switch,
  Route,
} from 'react-router-dom'

import GlobalStyle from './styles/global'
import { ThemeProvider } from 'styled-components';
import { useState, useCallback } from 'react';

import { AuthContextProvider } from './contexts/authContext';

import {
  Auth
} from './pages'

import React from 'react';
import light from './styles/themes/light'
import dark from './styles/themes/dark'

import ProtectedRoute from './middlewares/authMiddleware';


function App() {
  const [theme, setTheme] = useState(dark)

  const toggleTheme = useCallback(() => {
    console.log(theme)
    setTheme(theme.id === 'light' ? dark : light)
  }, [theme]);

  return (
    <>
      <BrowserRouter>
        <AuthContextProvider>
          <ThemeProvider theme={theme}>
            <DndProvider backend={HTML5Backend}>
              <Switch>
                <Route path='/' element={<Auth toggleTheme={toggleTheme} />} />

                <Route path='/dashboard' element={
                  <ProtectedRoute>
                    <h1>Olha só, dashboard.</h1>
                  </ProtectedRoute>
                } />
              </Switch>
            </DndProvider>

            <GlobalStyle />
          </ThemeProvider>
        </AuthContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
