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

export const EditorContainer = Styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`

export const EditorInput = Styled.input`
  margin: 8px;
  padding: 8px;
  border: none;
  border-radius: 4px;
  color: #333;
  width: 10rem;
`

type EditorOptionProps = {
  background: string;
  color: string;
}

export const EditorOption = Styled.button<EditorOptionProps>`
  background: ${props => props.background};
  color: ${props => props.color};

  border: none;
  width: 32px;
  height: 24px;

  margin: 2px;
  cursor: pointer;

  transition: filter 0.2 ease;

  &:hover {
    filter: brightness(1.2)
  }
`

export const CardContainer=  Styled.div`
  padding: 3px;
`

export const CreateButtonContainer = Styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`

export const CreateButton = Styled.button`
  margin-top: 10px;

  border: none;
  border-radius: 50%;
  background: ${props => props.theme.palette.secondary};
  width: 30px;
  height: 30px;
  cursor: pointer;

  transition: filter 0.2 ease;

  &:hover {
    filter: brightness(1.2)
  }
`