import styled, { css } from 'styled-components';
import device from '../../../styles/breakpoints';
import { linkActiveStyles } from '../../../styles/util';
import { Icon as BasicIcon } from '../../atoms/elements';

export const StyledFooter = styled.footer`
  margin-top: 8rem;
  padding-block: 4rem 3rem;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.smokyBlack};

  ${device.medium} {
    margin-top: 13rem;
  }
`;

export const Logo = styled.img`
  margin-inline: auto;

  ${device.xxlarge} {
    margin-inline: 0;
  }
`;

export const Content = styled.div`
  display: grid;
  gap: 4rem;
  margin-block: 4rem 3rem;
  padding-block: 4rem;
  border-block: 1px solid ${({ theme }) => theme.colors.charlestonGreen};

  ${device.medium} {
    grid-template-columns: repeat(2, 1fr);

    & > :last-child {
      grid-column: 1/3;
    }
  }

  ${device.xxlarge} {
    grid-template-columns: repeat(5, auto);

    & > :last-child {
      grid-column: unset;
    }
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  ${device.xxlarge} {
    align-items: flex-start;
  }
`;

export const Container = styled(Box)`
  ${device.xlarge} {
    gap: 2rem;
  }

  ${device.xxlarge} {
    :last-child {
      align-items: center;
    }
  }
`;

export const Heading = styled.h4`
  font-size: clamp(1.7rem, 1.3rem + 0.5vw, 2rem);
  line-height: 1.5;
  font-weight: 700;
  text-transform: capitalize;
`;

const textStyles = css`
  font-size: clamp(1.4rem, 1.2rem + 0.5vw, 1.8rem);
  line-height: 1.67;
  font-weight: 600;
  opacity: 0.8;
`;

export const Link = styled.a`
  ${textStyles}
  ${linkActiveStyles}
`;

export const ContactText = styled.p`
  ${textStyles}
`;

export const ContactBox = styled.div`
  display: flex;
  gap: 1.5rem;
`;

export const Socials = styled.div`
  display: flex;
  gap: 2.5rem;
`;

export const Icon = styled(BasicIcon)`
  transition: scale 0.7s;

  &:hover {
    scale: 1.2;
  }
`;

export const Copyright = styled.p`
  text-align: center;
  font-size: clamp(1.4rem, 1.1rem + 0.5vw, 1.6rem);
  line-height: 1.625;
  opacity: 0.8;
`;
