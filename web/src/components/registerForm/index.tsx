import { useState } from 'react'
import * as S from './styles'

type FormProps = {
  email: string;
  password: string;
}

interface IProps {
  signUp({ email, password }: FormProps): Promise<void>;
  callback?: () => void;
}

export default function RegisterForm({ signUp, callback }: IProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleClick = (event: any) => {
    event.preventDefault();

    return signUp({ email, password })
  }

  return (
    <S.Container>
      <S.Title>
        Cadastro
      </S.Title>

      <S.Form>
        <input onChange={(value) => setEmail(value.target.value)} value={email} type='text' placeholder='Seu endereço de e-mail' />
        <input onChange={(value) => setPassword(value.target.value)} value={password} type='password' placeholder='Sua senha de acesso' />

        <span>Já possui uma conta? <p onClick={callback}>Autenticar-se agora!</p></span>

        <button onClick={(event) => handleClick(event)}>Cadastrar</button>
      </S.Form>
    </S.Container>
  )
}