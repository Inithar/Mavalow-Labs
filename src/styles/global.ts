import { createGlobalStyle } from 'styled-components';
import device from './breakpoints';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font: inherit;
    scroll-behavior: smooth;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }
  
  html {
    font-size: 62.5%;
    font-family: 'Montserrat', sans-serif;
    scroll-padding-top: 8rem;

    ${device.medium}{
      scroll-padding-top: 10rem;
    }

    ${device.xlarge}{
      scroll-padding-top: 12rem;
    }
  }

  body {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.black};
  }

  img, picture, video, svg {
    display: block;
    max-width: 100%;
  }

  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }

`;

export default GlobalStyle;
