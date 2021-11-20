import Styled from 'styled-components'

export const Container = Styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`

export const CreateButton = Styled.button`
  background: ${props => props.theme.palette.secondary};
  border: none;
  border-radius: 3px;

  width: 160px;
  height: 50px;

  margin-top: 25px;

  position: fixed;
  right: 50%;
  left: 50%;

  cursor: pointer;

  transition: filter 0.2 ease-in;

  color: #fff;
  font-weight: bold;

  &:hover {
    filter: brightness(1.2)
  }
`

export const CreateModal = Styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  button {
    border: none;
    padding: 15px;
    margin-left: 3px;
    font-weight: bold;
    cursor: pointer;
    color: #fff;

    transition: filter 0.2 ease-in;

    &:hover {
      filter: brightness(0.8);
    }
  }
`;

export const CreateInputText = Styled.input.attrs({ type: 'text' })`
  color: ${props => props.theme.palette.secondary};
    
  padding: 15px;
`

export const CreateInputConfirm = Styled.button`
  background: ${props => props.theme.palette.secondary};
`;

export const CreateInputCancel = Styled.button`
  background: ${props => props.theme.palette.secondary};
`