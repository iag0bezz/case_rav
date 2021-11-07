import Styled from 'styled-components'
import { lighten } from 'polished';

export const Container = Styled.div`
  background: ${props => props.theme.palette.group.primary}
  height: 100%;
  width: 250px;
  padding: 16px;
`

export const TitleContainer = Styled.div`
  width: 100%;
  height: 100%;
  cursor: text;

  background: ${props => props.theme.palette.secondary};
`

export const Title = Styled.h4`
  color: ${props => lighten(0.1, props.theme.palette.text.primary)};
  padding: 16px;
`

export const CardContainer=  Styled.div`
  padding: 3px;
`

export const CreateButtonContainer = Styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const CreateButton = Styled.button`
  margin-top: 10px;

  border: none;
  border-radius: 50%;
  background: green;
  width: 30px;
  height: 30px;
  cursor: pointer;
`