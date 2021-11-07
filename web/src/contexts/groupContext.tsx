import { ReactNode, createContext, useEffect, useState } from 'react';
import { useAuth } from 'hooks/useAuth';

export type Group = {
  id: number;
  name: string;
  cards: Card[]
}

export type Card = {
  id: number;
  content: string;
  created_at: string;
  finished: boolean;
  deadline?: string;
}

type GroupContextType = {
  groups: Group[];
  loading: boolean;
}

type GroupContextProviderProps = {
  children: ReactNode;
}

export const GroupContext = createContext({} as GroupContextType)

export function GroupContextProvider(props: GroupContextProviderProps) {
  const { user } = useAuth();

  const [groups, setGroups] = useState<Group[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      const groups = [
        {
          id: 1,
          name: 'Em Planejamento',
          cards: [
            {
              id: 1,
              content: 'Cadastro de Usuários',
              created_at: '06/11/2021 às 19:13',
              finished: false,
              deadline: undefined
            },
            {
              id: 2,
              content: 'Dashboard de Clientes',
              created_at: '05/11/2021 às 13:31',
              finished: false,
              deadline: undefined,
            }
          ]
        },
        {
          id: 2,
          name: 'Em Desenvolvimento',
          cards: [
            {
              id: 3,
              content: 'Montagem do menu lateral',
              created_at: '04/11/2021 às 12:50',
              finished: false,
              deadline: '10/11/2021 às 22:00'
            },
            {
              id: 4,
              content: 'Cadastro de Clientes',
              created_at: '01/11/2021 às 15:43',
              finished: false,
              deadline: '05/11/2021 às 22:00'
            }
          ]
        },
        {
          id: 3,
          name: 'Finalizado',
          cards: [
            {
              id: 5,
              content: 'Página de autenticação',
              created_at: '01/11/2021 às 14:35',
              finished: true,
              deadline: '05/11/2021 às 22:00',
            }
          ]
        }
      ]

      setGroups(groups);
    }

    setLoading(false);
  }, [user])

  return (
    <GroupContext.Provider value={{ groups, loading }}>
      {props.children}
    </GroupContext.Provider>
  )
}