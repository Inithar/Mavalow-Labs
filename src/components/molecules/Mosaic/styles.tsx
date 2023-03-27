import styled from 'styled-components';
import device from '../../../styles/breakpoints';

interface TitleProps {
  minHeight?: string;
}

export const MosaicBoxes = styled.div`
  display: grid;
  gap: 1px;
  margin-block: 4rem 3rem;
  background-color: ${({ theme }) => theme.colors.brightGray};

  ${device.small} {
    margin-block: 6rem 4rem;
    grid-template-columns: repeat(2, 1fr);
  }

  ${device.large} {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const Box = styled.div`
  display: grid;
  justify-items: center;
  text-align: center;
  padding: 3rem;
  background-color: ${({ theme }) => theme.colors.black};
`;

export const Title = styled.p<TitleProps>`
  display: flex;
  align-items: center;
  margin-top: 2rem;
  font-size: clamp(1.9rem, 1.4rem + 0.7vw, 2.4rem);
  line-height: 1.33;
  font-weight: 500;

  ${device.small} {
    margin-top: 1rem;
    min-height: ${({ minHeight }) => minHeight || 'auto'};
  }

  ${device.large} {
    min-height: ${({ minHeight }) => (minHeight ? `${Number(minHeight?.slice(0, -3)) + 3}rem` : 'auto')};
  }
`;
