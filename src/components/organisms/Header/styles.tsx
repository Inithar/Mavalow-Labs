import styled from 'styled-components';
import device from '../../../styles/breakpoints';

export const StyledHeader = styled.header`
  margin-block: 9rem;

  ${device.medium} {
    display: flex;
    align-items: center;
    gap: 2rem;
    margin-block: 12rem 9rem;
  }

  ${device.large} {
    gap: 3.7rem;
    margin-block: 12rem;
  }
`;

export const Box = styled.div`
  & > button {
    margin: 0 auto;
  }

  ${device.medium} {
    width: 55%;

    & > button {
      margin: 0;
    }
  }
`;

export const ImageBox = styled.div`
  display: flex;
  justify-content: center;

  ${device.medium} {
    width: 45%;
    order: 2;
  }
`;

export const Image = styled.img`
  max-height: 50rem;

  ${device.medium} {
    max-height: unset;
  }
`;
