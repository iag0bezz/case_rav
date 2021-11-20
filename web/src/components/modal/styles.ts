import Styled from 'styled-components';

type WrapperProps = {
  width: number;
  height: number;
  background: string;
}

export const Container = Styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 99;
  opacity: 1;
  overflow-x: hidden;
  overflow-y: auto;
  background: rgba(0, 0, 0, 0.7);
`

export const Wrapper = Styled.div<WrapperProps>`
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: ${props => props.background};
  color: ${props => props.theme.palette.text.primary};
  position: relative;
  z-index: 10;
  border-radius: 10px;
  width: ${props => `${props.width}px`};
  height: ${props => `${props.height}px`};
`