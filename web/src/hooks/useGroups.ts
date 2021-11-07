import { useContext } from 'react';
import { GroupContext } from '../contexts/groupContext';

export function useGroup() {
  return useContext(GroupContext);
}