import { Logo, Nav, Box, Links, Link, BurgerIcon, CloseIcon } from './styles';
import { Button } from '../../atoms/elements';
import { useState } from 'react';

import { navigationLinks } from '../../../data/data.json';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavigation = () => setIsOpen(prev => !prev);

  return (
    <Nav>
      <Logo src="./assets/logo.png" alt="logo" />
      <Box isOpen={isOpen}>
        <CloseIcon onClick={toggleNavigation} />
        <Links>
          {navigationLinks.map(link => (
            <Link onClick={toggleNavigation} tabIndex={0} href={`#${link.id}`} key={crypto.randomUUID()}>
              {link.text}
            </Link>
          ))}
        </Links>
        <Button onClick={toggleNavigation}>Callendly</Button>
      </Box>
      <BurgerIcon onClick={toggleNavigation} />
    </Nav>
  );
};

export default Navigation;
