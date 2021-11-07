import { Dispatch, SetStateAction, useEffect, useState } from "react";

type Response<T> = [
  T,
  Dispatch<SetStateAction<T>>,
];

function usePersistedState<T>(key: string, initialState?: T | undefined): Response<T> {
  const [state, setState] = useState(() => {
    const storageValue = localStorage.getItem(key);

    if (storageValue && storageValue !== undefined) {
      return JSON.parse(storageValue);
    } else {
      return initialState;
    }
  });

  useEffect(() => {
    if (state === undefined) {
      localStorage.removeItem(key)
    } else localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}

export default usePersistedState;