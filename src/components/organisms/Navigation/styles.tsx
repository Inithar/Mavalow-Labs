import styled from 'styled-components';
import device from '../../../styles/breakpoints';
import { FaBars } from 'react-icons/fa';
import { IoCloseSharp } from 'react-icons/io5';
import { linkActiveStyles } from '../../../styles/util';

interface BoxProps {
  isOpen: boolean;
}

export const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  width: min(100%, 148rem);
  background-color: ${({ theme }) => theme.colors.black};
  z-index: 10;

  ${device.medium} {
    padding: 3rem;
  }

  ${device.xlarge} {
    left: 50%;
    transform: translateX(-50%);
  }
`;

export const Logo = styled.img`
  height: 3.2rem;

  ${device.medium} {
    height: 4rem;
  }

  ${device.xlarge} {
    height: auto;
  }
`;

export const Box = styled.div<BoxProps>`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4rem;
  padding: 3rem;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.black};
  transform: translateY(${({ isOpen }) => (isOpen ? '0' : '-100vh')});
  transition: transform 1s;

  ${device.xlarge} {
    position: static;
    flex-direction: row;
    padding: 0;
    height: auto;
    width: auto;
    transform: unset;
  }
`;

export const Links = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;

  ${device.xlarge} {
    flex-direction: row;
  }
`;

export const Link = styled.a`
  ${linkActiveStyles}
  font-size: 2.4rem;

  ${device.xlarge} {
    font-size: 2rem;
  }
`;

export const BurgerIcon = styled(FaBars)`
  font-size: 4rem;
  cursor: pointer;

  ${device.xlarge} {
    display: none;
  }
`;

export const CloseIcon = styled(IoCloseSharp)`
  position: absolute;
  top: 2.5rem;
  right: 2.5rem;
  font-size: 3.5rem;

  ${device.medium} {
    font-size: 4.5rem;
  }

  ${device.xlarge} {
    display: none;
  }
`;
