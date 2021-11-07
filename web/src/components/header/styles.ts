import Styled from 'styled-components';

export const Container = Styled.div`
  overflow: hidden;
  background: ${(props) => props.theme.palette.primary};
  padding: 1.5rem;
`;

export const Input = Styled.input`
  border: none;
  padding: 0.7rem;
  width: 26.6%;
  border-radius: 0.5rem;
  color: black;
`

export const ReservatedContainer = Styled.div`
  float: right;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Notification = Styled.svg`
  cursor: pointer;

  width: 30px;
  height: 30px;

  fill: ${props => props.theme.id === 'dark' ? props.theme.palette.secondary : '#FFF'};

  transition: filter 0.2s;

  &:hover {
    filter: brightness(1.5)
  }
`

export const LogoutButton = Styled.button`
  border: none;
  width: 50px;
  height: 30px;

  cursor: pointer;

  margin-left: 20px;

  border-radius: 8px;

  background: ${props => props.theme.id === 'dark' ? props.theme.palette.secondary : '#FFF'};
  color: ${props => props.theme.palette.text.primary};
`