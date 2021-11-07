import IComponentProps from 'components/@types/componentProps'

import { DragDropContext, Droppable } from 'react-beautiful-dnd';

import ThemeSwitcher from 'components/themeSwitcher'
import Header from 'components/header'

import * as S from './styles'
import { useGroup } from '../../hooks/useGroups';
import Group from 'components/group';

export default function Dashboard({ toggleTheme }: IComponentProps) {
  const { groups } = useGroup();
  
  const GroupList = () => {
    return (
      <>
        {groups && groups.map((group, index) => {
          return <Group key={group.id} index={index} group={group} />
        })}
      </>
    )
  }

  return (
    <>
      <Header />
      <DragDropContext onDragEnd={() => console.log('vapo')}>
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
      {toggleTheme && <ThemeSwitcher toggleTheme={toggleTheme} />}
    </>
  )
}