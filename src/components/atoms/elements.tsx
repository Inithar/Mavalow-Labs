import styled from 'styled-components';
import device from '../../styles/breakpoints';
import { marginFromProps, MarginFromPropsTypes } from '../../styles/util';

interface IconProps {
  width?: string;
  height?: string;
}

interface LineBreakProps {
  breakFrom?: keyof typeof device;
}

interface ButtonProps extends MarginFromPropsTypes {}

export const Button = styled.button<ButtonProps>`
  ${marginFromProps}

  display: block;
  padding: 1.6rem 3.2rem;
  font-size: clamp(1.6rem, 1.4rem + 0.5vw, 2rem);
  font-weight: 600;

  background: -webkit-linear-gradient(${({ theme }) => theme.colors.gamboge}, ${({ theme }) => theme.colors.internationalOrange});
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  border: 1px solid;
  border-image-slice: 1;
  border-image-source: linear-gradient(to left, ${({ theme }) => theme.colors.gamboge}, ${({ theme }) => theme.colors.internationalOrange});

  transition: scale 0.7s;
  cursor: pointer;

  &:hover,
  &:focus {
    outline: none;
    scale: 1.1;
  }
`;

export const Icon = styled.img<IconProps>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
`;

export const LineBreak = styled.br<LineBreakProps>`
  display: ${({ breakFrom }) => (breakFrom ? 'none' : 'initial')};

  ${({ breakFrom }) => breakFrom && device[breakFrom]} {
    display: initial;
  }
`;
