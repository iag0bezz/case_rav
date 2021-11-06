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
`

export const ReservatedContainer = Styled.div`
  float: right;

  display: flex;
  justify-contents: space-between;
  align-items: center;
`