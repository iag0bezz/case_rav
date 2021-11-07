import Styled from 'styled-components';

export const Container = Styled.div`
  flex: 1;
  overflow-y: auto;
  align-self: center;
  max-height: 90vh;
  flex-direction: column;
  justify-content: space-between;
`

export const Card = Styled.div`
  display: flex;
  align-items: center;

  background: ${props => props.theme.palette.group.card};
  border-radius: 3px;
  
  position: relative;
  padding: 10px;
  cursor: pointer;
  max-width: 250px;

  & + {Card} {
    margin-top: 7.5px;
  }
`