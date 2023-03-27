import styled from 'styled-components';
import device from '../../../styles/breakpoints';

export const Box = styled.div`
  padding: 3rem;
  background-color: ${({ theme }) => theme.colors.smokyBlack};

  ${device.medium} {
    flex-basis: calc(50% - 2rem);
  }

  ${device.xlarge} {
    flex-basis: calc(33.33% - 2rem);
  }
`;

export const ImageBox = styled.div`
  display: flex;
  align-items: center;
  min-height: 30rem;
`;

export const Image = styled.img`
  margin-inline: auto;
`;

export const Number = styled.p`
  margin-block: 3rem 2rem;
  font-family: 'Righteous', cursive;
  font-size: 7rem;
  color: transparent;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: ${({ theme }) => theme.colors.internationalOrange};
`;

export const Heading = styled.h3`
  margin-block: 2rem;
  font-size: clamp(1.9rem, 1.4rem + 0.7vw, 2.4rem);
  line-height: 1.33;
  font-weight: 700;
`;
