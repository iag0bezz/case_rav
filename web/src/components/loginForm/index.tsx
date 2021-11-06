import { useState } from 'react'
import * as S from './styles'

type FormProps = {
  email: string;
  password: string;
}

interface IProps {
  signIn({ email, password }: FormProps): Promise<void>;
  callback?: () => void;
}

export default function LoginForm({ signIn, callback }: IProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleClick = (event: any) => {
    event.preventDefault();

    return signIn({ email, password })
  }

  return (
    <S.Container>
      <S.Title>
        Acessar
      </S.Title>

      <S.Form>
        <input onChange={(value) => setEmail(value.target.value)} value={email} type='text' placeholder='Seu endereço de e-mail' />
        <input onChange={(value) => setPassword(value.target.value)} value={password} type='password' placeholder='Sua senha de acesso' />

        <button onClick={(event) => handleClick(event)}>Autenticar</button>
      </S.Form>
    </S.Container>
  )
}