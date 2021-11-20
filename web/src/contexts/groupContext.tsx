import { ReactNode, createContext, useEffect, useState } from 'react';
import { useAuth } from 'hooks/useAuth';

import { database } from 'services/firebase';

type FirebaseGroups = Record<
  string,
  {
    id: number,
    name: string,
    position: number,
    cards: Record<
      string,
      {
        id: number,
        content: string,
        created_at: string,
        position: number,
        finished: boolean,
        deadline?: string,
      }
    >
  }
>

export type Group = {
  key: string;
  id: number;
  name: string;
  position: number;
  cards: Card[]
}

export type Card = {
  key: string;
  id: number;
  content: string;
  created_at: string;
  position: number;
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
      const boardRef = database.ref(`boards/${user.id}`);

      boardRef.on('value', (board) => {
        const databaseBoard = board.val();

        if (databaseBoard == null)
          return;
        
        const firebaseGroups: FirebaseGroups = databaseBoard.groups ?? {};

        const groups: Group[] = Object.entries(firebaseGroups)
        .map(([key, value]) => {
          return {
            key: key,
            id: value.id,
            name: value.name,
            position: value.position,
            cards: Object.entries(value.cards || {})
            .map(([cardKey, cardValue]) => {
              return {
                key: cardKey,
                id: cardValue.id,
                content: cardValue.content,
                created_at: cardValue.created_at,
                position: cardValue.position,
                finished: cardValue.finished,
                deadline: cardValue.deadline
              }
            })
          };
        })

        setGroups(groups);
      });
    }

    setLoading(false);
  }, [user])

  return (
    <GroupContext.Provider value={{ groups, loading }}>
      {props.children}
    </GroupContext.Provider>
  )
}