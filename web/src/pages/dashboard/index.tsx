import IComponentProps from 'components/@types/componentProps'
import { useState } from 'react';

import { database } from 'services/firebase';

import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd';

import ThemeSwitcher from 'components/themeSwitcher'
import Modal from 'components/modal';
import Header from 'components/header'

import * as S from './styles'
import { useGroup } from '../../hooks/useGroups';
import { useAuth } from 'hooks/useAuth';
import Group from 'components/group';

export default function Dashboard({ toggleTheme }: IComponentProps) {
  const { user } = useAuth();
  const { groups } = useGroup();
  const [creating, setCreating] = useState(false);
  const [create, setCreate] = useState('');
  
  const GroupList = () => {
    return (
      <>
        {groups && groups.map((group, index) => {
          return <Group key={group.id} index={index} group={group} />
        })}
      </>
    )
  }

  const handleCreateGroup = async () => {
    if (!create) {
      return;
    }

    await database.ref(`boards/${user?.id}/groups`).push({
      id: new Date().getTime(),
      name: create,
      position: groups.length,
    });

    setCreate('');
    setCreating(false);
  }

  const handleDragEnd = async (result: DropResult) => {
    const { destination, source, draggableId, type } = result;
  
    if (!destination)
      return;

    if (type === 'card') {
      const ref = database.ref(`boards/${user?.id}/groups/${source.droppableId}/cards/${draggableId}`);

      await ref.on('value', async (cardDatabase) => {
        const card = cardDatabase.val();

        if (card) {
          await database.ref(`boards/${user?.id}/groups/${source.droppableId}/cards/${draggableId}`).remove();
          await database.ref(`boards/${user?.id}/groups/${destination.droppableId}/cards`).push({
            id: card.id,
            content: card.content,
            created_at: card.created_at,
            position: destination.index,
            finished: card.finished,
            ...(card.deadline && {
              deadline: card.deadline,
            })
          });
        }
      })
    }
  }

  return (
    <>
      <Header />
      <DragDropContext onDragEnd={(result) => handleDragEnd(result)}>
        <Droppable droppableId='groups' direction='horizontal' type='list'>
          {provided => (
            <S.Container
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              <GroupList />
              {provided.placeholder}
            </S.Container>
          )}
        </Droppable>
      </DragDropContext>
      <S.CreateButton onClick={() => setCreating(true)}>
        NOVO GRUPO
      </S.CreateButton>

      <Modal width={0} height={0} show={creating} setShow={() => setCreating(!creating)}>
        <S.CreateModal>
          <S.CreateInputText placeholder='Digite o nome do grupo' value={create} onChange={(event) => setCreate(event.target.value)} />
          <S.CreateInputConfirm onClick={() => handleCreateGroup()}>Criar</S.CreateInputConfirm>
          <S.CreateInputCancel onClick={() => setCreate('')}>Cancelar</S.CreateInputCancel>
        </S.CreateModal>
      </Modal>

      {toggleTheme && <ThemeSwitcher toggleTheme={toggleTheme} />}
    </>
  )
}