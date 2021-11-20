import IComponentProps from "components/@types/componentProps";
import { useAuth } from "hooks/useAuth";
import React, { useState } from "react";

import * as S from './styles'

import { ReactComponent as NotificationIcon } from 'assets/notification.svg';

export default function Header({ toggleTheme }: IComponentProps) {
  const { signOut } = useAuth();

  const [search, setSearch] = useState('');

  return (
    <S.Container>
      {true && <S.Input 
        onChange={(value) => setSearch(value.target.value)} 
        placeholder="Localizar atividade."
        value={search} 
      />}
      <S.ReservatedContainer>
        <S.Notification>
          <NotificationIcon />
        </S.Notification>
        <S.LogoutButton onClick={signOut}>
          Sair
        </S.LogoutButton>
      </S.ReservatedContainer>
    </S.Container>
  )
}