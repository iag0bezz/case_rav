import React from 'react'
import {
  Container
} from './style'

import IComponentProps from '../../components/@types/componentProps'
import { useAuth } from '../../hooks/useAuth'


export default function Auth ({ toggleTheme }: IComponentProps) {
  const { signIn } = useAuth()

  return (
    <Container>
      <h1 onClick={() => signIn({ email: '', password: '' })}>Clique Aqui</h1>
    </Container>
  )
}