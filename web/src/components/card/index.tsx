import { Card as CardType } from 'contexts/groupContext'; 
import { Draggable } from 'react-beautiful-dnd';

import * as S from './styles'

interface IProps {
  card: CardType;
  index: number;
}

export default function Card({ card, index }: IProps) {
  return (
    <Draggable draggableId={String("card-" + card.id)} index={index}>
      {provided => (
        <S.Container
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <S.Card>
            <p>{card.content}</p>
          </S.Card>
        </S.Container>
      )}
    </Draggable>
  )
}