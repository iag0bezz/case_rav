import {
  Container
} from './style'

import { useAuth } from '../../hooks/useAuth'
import IComponentProps from 'components/@types/componentProps'
import LoginForm from 'components/loginForm'

export default function Auth (props: IComponentProps) {
  const { signIn } = useAuth()

  return (
    <Container>
      <LoginForm signIn={signIn} />
    </Container>
  )
}