import IComponentProps from "components/@types/componentProps";
import { useAuth } from "hooks/useAuth";
import React, { useContext, useState } from "react";
import { ThemeContext } from "styled-components";

import * as S from './styles'

export default function Header({ toggleTheme }: IComponentProps) {
  const { user } = useAuth();
  const { id } = useContext(ThemeContext)

  const [search, setSearch] = useState('');

  return (
    <S.Container>
      {true && <S.Input 
        onChange={(value) => setSearch(value.target.value)} 
        placeholder="Localizar atividade."
        value={search} 
      />}
      <S.ReservatedContainer>
        
      </S.ReservatedContainer>
    </S.Container>
  )
}