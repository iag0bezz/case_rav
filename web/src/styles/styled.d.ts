import 'styled-components'

interface IPalette {
  primary: string;
  secundary?: string;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    id: string;

    palette: {
      primary: string;
      secundary: string;

      text: IPalette;
      background: IPalette;
    }
  } 
}