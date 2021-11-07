import Styled from 'styled-components';
import { darken } from 'polished'

export const Container = Styled.div`
  background: ${props => props.theme.palette.primary}

  display: flex;
  align-items: center;
  justify-content: center;

  width: 350px;
  margin: 0 auto;

  padding-top: 15%;

  @media(max-width: 800px) {
    padding-top: 50%;
  }
`

export const Title = Styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 35px;

  padding-bottom: 30px;
`

export const Form = Styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  input {
    background: none;
    width: 300px;
    height: 35px;

    padding: 0 8px;
    cursor: text;
    
    transition: 0.3s linear;

    border: none;
    border-bottom: 1px solid #ccc;

    &:focus {
      padding: 5px 0;
      border-bottom: 1px solid ${props => props.theme.palette.secondary};

      transition: 0.3s linear;
    }

    & + input {
      margin-top: 20px;
    }
  }

  button {
    margin-top: 20px;
    width: 100%;
    height: 50px;
    border-radius: 9px;

    font-weight: 600;

    background: ${props => props.theme.palette.secondary};
    color: #FFF;
    border: none;

    cursor: pointer;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9)
    }
  }

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: space-between;

    margin-top: 1rem;

    color: ${props => darken(0.2, props.theme.palette.text.primary)};
    font-size: 12px;

    p {
      cursor: pointer;
      color: ${props => props.theme.palette.secondary};
      margin-left: 4px;
    }
  }
`