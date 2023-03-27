import 'styled-components';

export type color = {
  white: string;
  brightGray: string;
  gamboge: string;
  internationalOrange: string;
  charlestonGreen: string;
  smokyBlack: string;
  black: string;
};

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: color;
  }
}
