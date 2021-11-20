import * as S from './styles'

import { Group as GroupType } from 'contexts/groupContext'; 
import { Draggable, Droppable } from 'react-beautiful-dnd';
import { useState } from 'react';

import Card from 'components/card'
import Modal from '../modal';

import { Check } from '@styled-icons/bootstrap/Check';
import { Close } from '@styled-icons/evaicons-solid/Close';
import { useAuth } from 'hooks/useAuth';
import { database } from 'services/firebase';

interface IProps {
  index: number;
  group: GroupType;
}

export default function Group({ group, index }: IProps) {
  const { user } = useAuth();
  const [editing, setEditing] = useState(false);
  const [creating, setCreating] = useState(false);

  const [title, setTitle] = useState('');

  const handleTitleEditor = (group: GroupType) => {
    setEditing(true);
    setTitle(group.name);
  }

  const handleTitleConfirm = async () => {
    await database.ref(`boards/${user?.id}/groups/${group?.key}`).set({
      id: group.id,
      name: title
    });

    setEditing(false);
  }

  const handleCreateCard = async () => {
    await database.ref(`boards/${user?.id}/groups/${group?.key}/cards`).push({
      id: new Date().getTime(),
      content: `${Math.random()}`,
      created_at: 'now',
      position: 1,
      finished: false,
    });
  }

  return (
    <>
      <Draggable draggableId={group.key} index={index}>
        {provided => (
          <S.Container
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
          >
            <Droppable droppableId={group.key} type='card'>
              {provided => (
                <div>
                  <S.TitleContainer>
                    {editing ? (
                      <S.EditorContainer>
                        <S.EditorInput value={title} onChange={(event) => setTitle(event.target.value)} placeholder='Título do grupo' />
                        <S.EditorOption onClick={() => handleTitleConfirm()} background="green" color="#333"><Check /></S.EditorOption>
                        <S.EditorOption onClick={() => setEditing(false)} background="red" color="#333"><Close /></S.EditorOption>
                      </S.EditorContainer>
                    ) : (
                      <S.Title onClick={() => handleTitleEditor(group)}>
                        {group.name}
                      </S.Title>
                    )}
                  </S.TitleContainer>
                  <S.CardContainer>
                    <div {...provided.droppableProps} ref={provided.innerRef}>
                      {group.cards.sort((a, b) => a.position - b.position).map((card, index) => {
                        return <Card card={card} index={index} key={card.id} />
                      })}
                      {provided.placeholder}
                    </div>
                  </S.CardContainer>
                </div>
              )}
            </Droppable>
            <S.CreateButtonContainer>
              <S.CreateButton onClick={() => handleCreateCard()}>
                +
              </S.CreateButton>
            </S.CreateButtonContainer>
          </S.Container>
        )}
      </Draggable>
      <Modal width={300} height={150} show={creating} setShow={setCreating}>
          
      </Modal>
    </>
  )
}