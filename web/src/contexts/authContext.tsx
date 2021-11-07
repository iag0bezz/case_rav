import usePersistedState from 'hooks/usePersistedState';
import { createContext, ReactNode, useEffect, useState } from 'react';

type User = {
  id: number;
  email: string;
  name: string;
}

type FormProps = {
  email: string;
  password: string;
}

type AuthContextType = {
  user: User | undefined;
  checking: boolean;
  signIn: ({ email, password }: FormProps) => Promise<void>;
  signUp: ({ email, password }: FormProps) => Promise<void>;
  signOut: () => void;
}

type AuthContextProviderProps = {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextType);

export function AuthContextProvider(props: AuthContextProviderProps) {
  const [user, setUser] = usePersistedState<User | undefined>('user');
  const [checking, setChecking] = useState<boolean>(true);

  useEffect(() => {
    if (user) {
      const { email, name } = user;

      if (!email && !name) {
        setUser(undefined)
        return
      }
    }

    setChecking(false);
  }, [setUser, user])

  async function signIn({ email, password }: FormProps) {
    setUser({ id: 1, email: 'iago.beserra1@gmail.com', name: 'Iago Beserra' })
  }

  async function signUp({ email, password }: FormProps) {

  }

  async function signOut() {
    setUser(undefined)
  }

  return (
    <AuthContext.Provider value={{ user, checking, signIn, signUp, signOut }}>
      {props.children}
    </AuthContext.Provider>
  )
}