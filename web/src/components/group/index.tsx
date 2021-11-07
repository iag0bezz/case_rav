import * as S from './styles'

import { Group as GroupType } from 'contexts/groupContext'; 
import { Draggable, Droppable } from 'react-beautiful-dnd';
import { useState } from 'react';

import Card from 'components/card'

interface IProps {
  index: number;
  group: GroupType;
}

export default function Group({ group, index }: IProps) {
  const [editing, setEditing] = useState(false);

  return (
    <Draggable draggableId={"group-" + String(group.id)} index={index}>
      {provided => (
        <S.Container
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <Droppable droppableId={String("group-" + group.id)} type='card'>
            {provided => (
              <div>
                {editing ? (
                  <h1>Editing...</h1>
                ) : (
                  <S.TitleContainer>
                    <S.Title>
                      {group.name}
                    </S.Title>

                  </S.TitleContainer>
                )}
                <S.CardContainer>
                  <div {...provided.droppableProps} ref={provided.innerRef}>
                    {group.cards.map((card, index) => {
                      return <Card card={card} index={index} key={card.id} />
                    })}
                    {provided.placeholder}
                  </div>
                </S.CardContainer>
              </div>
            )}
          </Droppable>
          <S.CreateButtonContainer>
            <S.CreateButton>
              +
            </S.CreateButton>
          </S.CreateButtonContainer>
        </S.Container>
      )}
    </Draggable>
  )
}