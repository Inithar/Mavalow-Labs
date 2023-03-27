import styled from 'styled-components';
import { marginFromProps, MarginFromPropsTypes, textBasicStyles, TextBasicStyles, textTransformValue } from '../../styles/util';

interface TextProps extends MarginFromPropsTypes, TextBasicStyles {
  fz: 'sm' | 'md' | 'lg';
  lh?: string;
  opacity?: string;
}

interface HighlightProps {
  transform?: textTransformValue;
}

export const H1 = styled.h1<TextBasicStyles>`
  ${textBasicStyles}
  font-family: 'Righteous', cursive;
  font-size: clamp(3.2rem, 1.6rem + 2vw, 6.4rem);
  line-height: 1.0625;
`;

export const H2 = styled.h2<TextBasicStyles>`
  ${textBasicStyles}
  font-family: 'Righteous', cursive;
  font-size: clamp(2.4rem, 1.4rem + 2vw, 4rem);
  line-height: 1.25;
`;

export const Text = styled.p<TextProps>`
  ${marginFromProps}
  text-align: ${({ align }) => align || 'left'};
  color: ${({ theme, color }) => (color ? theme.colors[color] : 'inherit')};
  opacity: ${({ opacity }) => opacity};

  font-size: ${({ fz }) => {
    switch (fz) {
      case 'sm':
        return 'clamp(1.5rem, 1.2rem + 0.5vw, 1.8rem)';
      case 'md':
        return 'clamp(1.7rem, 1.3rem + 0.5vw, 2.0rem)';
      case 'lg':
        return 'clamp(1.8rem, 1.4rem + 0.7vw, 2.4rem)';
      default:
        return 'inherit';
    }
  }};

  line-height: ${({ lh }) => lh || '1.5'};
  font-weight: ${({ fw }) => fw};
`;

export const Highlight = styled.span<HighlightProps>`
  background: -webkit-linear-gradient(${({ theme }) => theme.colors.gamboge}, ${({ theme }) => theme.colors.internationalOrange});
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-transform: ${({ transform }) => transform || 'none'};
`;
