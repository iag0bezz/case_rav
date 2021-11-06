import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
  }

  html, body, #main {
    height: 100%;
  }

  body {
    -webkit-font-smoothing: antialiased !important;
    background: ${props => props.theme.palette.background.primary}
  }

  ul {
    list-style: none;
  }

  body, input, button, textarea {
    font: 400 16px "Roboto", sans-serif;
    color: ${props => props.theme.palette.text.primary}
  }
`