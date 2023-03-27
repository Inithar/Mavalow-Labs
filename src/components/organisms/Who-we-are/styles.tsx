import styled from 'styled-components';
import device from '../../../styles/breakpoints';
import { H2, Text } from '../../atoms/typography';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10rem;

  ${device.large} {
    flex-direction: row;
    justify-content: center;
    gap: 12rem;
    margin-top: 15rem;
    padding: 2rem;
  }
`;

export const ImageBox = styled.div`
  margin-top: 5rem;
  max-width: 50rem;
  order: 2;

  ${device.large} {
    margin-top: 0;
    max-width: initial;
    order: initial;
  }
`;

export const Image = styled.img``;

export const Heading = styled(H2)`
  text-align: center;

  ${device.large} {
    text-align: start;
  }
`;

export const Description = styled(Text)`
  text-align: center;

  ${device.large} {
    text-align: start;
  }
`;

export const ContentBox = styled.div`
  max-width: 50rem;

  ${device.large} {
    max-width: 45%;
  }
`;
