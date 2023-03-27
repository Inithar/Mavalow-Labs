import { css } from 'styled-components';
import { color } from '../@types/styled';

export type textAlignValue = 'left' | 'right' | 'center' | 'justify' | 'initial' | 'inherit';
export type textTransformValue = 'none' | 'capitalize' | 'uppercase' | 'lowercase' | 'initial' | 'inherit';

export interface MarginFromPropsTypes {
  mt?: string;
  mr?: string;
  mb?: string;
  ml?: string;
  mx?: string;
  my?: string;
}

export interface TextBasicStyles {
  align?: textAlignValue;
  fw?: string;
  transform?: textTransformValue;
  color?: keyof color;
}

export const marginFromProps = css<MarginFromPropsTypes>`
  margin-top: ${({ mt }) => mt};
  margin-right: ${({ mr }) => mr};
  margin-bottom: ${({ mb }) => mb};
  margin-left: ${({ ml }) => ml};
  margin-inline: ${({ mx }) => mx};
  margin-block: ${({ my }) => my};
`;

export const textBasicStyles = css<TextBasicStyles>`
  text-align: ${({ align }) => align || 'left'};
  font-weight: ${({ fw }) => fw || '400'};
  text-transform: ${({ transform }) => transform || 'none'};
  color: ${({ theme, color }) => (color ? theme.colors[color] : 'inherit')};
`;

export const linkActiveStyles = css`
  border: 1px solid transparent;
  cursor: pointer;

  &:link,
  &:visited {
    color: inherit;
    text-decoration: none;
  }

  &:focus {
    outline: none;
    border-image-slice: 1;
    border-image-source: linear-gradient(to left, ${({ theme }) => theme.colors.gamboge}, ${({ theme }) => theme.colors.internationalOrange});
  }

  &:hover,
  &:active {
    background: -webkit-linear-gradient(${({ theme }) => theme.colors.gamboge}, ${({ theme }) => theme.colors.internationalOrange});
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;
