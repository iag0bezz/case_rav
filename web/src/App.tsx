import { 
  BrowserRouter,
  Routes as Switch,
  Route,
} from 'react-router-dom'

import GlobalStyle from './styles/global'
import { DefaultTheme, ThemeProvider } from 'styled-components';
import { useCallback } from 'react';

import usePersistedState from 'hooks/usePersistedState';

import { AuthContextProvider } from './contexts/authContext';
import { GroupContextProvider } from 'contexts/groupContext';

import * as S from 'pages'

import light from './styles/themes/light'
import dark from './styles/themes/dark'

import ProtectedRoute from './middlewares/authMiddleware';

function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light)

  const toggleTheme = useCallback(() => {
    setTheme(theme.id === 'light' ? dark : light)
  }, [setTheme, theme.id]);

  return (
    <>
      <BrowserRouter>
        <AuthContextProvider>
          <GroupContextProvider>
            <ThemeProvider theme={theme}>
              <Switch>
                <Route path='/' element={<S.Auth toggleTheme={toggleTheme} />} />

                <Route path='/dashboard' element={
                  <ProtectedRoute>
                    <S.Dashboard toggleTheme={toggleTheme} />
                  </ProtectedRoute>
                } />
              </Switch>
              <GlobalStyle />
            </ThemeProvider>
          </GroupContextProvider>
        </AuthContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
