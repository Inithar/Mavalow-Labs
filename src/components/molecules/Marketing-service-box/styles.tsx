import styled from 'styled-components';
import device from '../../../styles/breakpoints';

export const Box = styled.div`
  background-color: ${({ theme }) => theme.colors.smokyBlack};
  padding: 2rem;
`;

export const Heading = styled.h3`
  display: flex;
  align-items: center;
  margin-block: 1.2rem;
  min-height: 5.2rem;
  font-size: clamp(1.9rem, 1.4rem + 0.7vw, 2.4rem);
  line-height: 1.083;
  font-weight: 600;

  ${device.medium} {
    margin-block: 1.6rem;
  }
`;
