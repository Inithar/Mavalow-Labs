import styled from 'styled-components';
import device from '../../styles/breakpoints';

export const Wrapper = styled.div`
  margin-inline: auto;
  padding-inline: 2rem;
  width: min(100%, 148rem);

  ${device.medium} {
    padding-inline: 3rem;
  }
`;

export const Main = styled.main``;
export const MarketingService = styled.section``;

export const MarketingServiceBoxes = styled.div`
  display: grid;
  gap: 2rem;
  margin-block: 4rem 10rem;

  ${device.small} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${device.medium} {
    margin-block: 6rem 15rem;
  }

  ${device.xlarge} {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const ProjectStages = styled.section``;

export const YourProject = styled.section`
  margin-top: 10rem;

  ${device.large} {
    margin-top: 15rem;
  }
`;

export const YourProjectBoxes = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  margin-block: 7rem 15rem;
`;

export const Industries = styled.section``;
