import usePersistedState from 'hooks/usePersistedState';
import { createContext, ReactNode, useEffect, useState } from 'react';

import { auth, firebase } from 'services/firebase';

type User = {
  id: string;
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
    const unsubscribe = auth.onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        const { displayName, email, uid } = user;

        if (!email) {
          return;
        }

        setUser({
          id: uid,
          email: email,
          name: displayName || email
        });
      }

      setChecking(false);
    })

    return () => {
      unsubscribe();
    }
  }, [setUser])

  async function signIn({ email, password }: FormProps) {
    await auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL);

    const result = await auth.signInWithEmailAndPassword(email, password);

    if (result.user) {
      const { email, uid, displayName } = result.user;

      if (!email) {
        return;
      }

      setUser({
        id: uid,
        email: email,
        name: displayName || email,
      });
    }
  }

  async function signUp({ email, password }: FormProps) {
    await auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL);

    const result = await auth.createUserWithEmailAndPassword(email, password);

    if (result.user) {
      const { email, uid, displayName } = result.user;
    
      if (!email) {
        return;
      }

      setUser({
        id: uid,
        email: email,
        name: displayName || email,
      });
    }
  }

  async function signOut() {
    if (user) {
      auth.signOut();

      setUser(undefined);
    }
  }

  return (
    <AuthContext.Provider value={{ user, checking, signIn, signUp, signOut }}>
      {props.children}
    </AuthContext.Provider>
  )
}