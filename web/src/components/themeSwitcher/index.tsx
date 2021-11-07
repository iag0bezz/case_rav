import * as S from './styles'

import Switch from 'react-switch'
import { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { shade } from 'polished'

import { ReactComponent as SunIcon } from 'assets/sun.svg';
import { ReactComponent as MoonIcon } from 'assets/moon.svg'

interface IProps {
  toggleTheme(): void;
}

export default function ThemeSwitcher({ toggleTheme }: IProps) {
  const theme = useContext(ThemeContext)
  
  return (
    <S.Container>
      <Switch 
        onChange={toggleTheme} 
        checked={theme.id === 'dark'}
        checkedIcon={false}
        uncheckedIcon={false}
        checkedHandleIcon={<MoonIcon />}
        uncheckedHandleIcon={<SunIcon />}
        height={20}
        width={40}
        handleDiameter={20}
        onHandleColor={'transparent'}
        offHandleColor={'transparent'}
        offColor={shade(0.15, theme.palette.primary)}
        onColor={shade(0.15, theme.palette.secondary)}
      />
    </S.Container>
  )
}