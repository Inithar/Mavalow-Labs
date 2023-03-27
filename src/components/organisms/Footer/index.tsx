import { Container, ContactBox, ContactText, Content, Heading, Link, Box, Logo, Socials, StyledFooter, Copyright, Icon } from './styles';

import { footerData } from '../../../data/data.json';
import { Wrapper } from '../../../pages/home/styles';

const Footer = () => {
  const { sections, contacts, socialMedia } = footerData;
  const linksArray = Object.values(sections);
  const sectionNames = Object.keys(sections);

  return (
    <StyledFooter>
      <Wrapper>
        <Logo src="./assets/logo.png" alt="logo" />

        <Content>
          {linksArray.map((links, index) => (
            <Container key={crypto.randomUUID()}>
              <Heading>{sectionNames[index]}</Heading>
              <Box>
                {links.map(link => (
                  <Link tabIndex={0} href="#" key={crypto.randomUUID()}>
                    {link}
                  </Link>
                ))}
              </Box>
            </Container>
          ))}

          <Container>
            <Heading>Contacts</Heading>
            <Box>
              {Object.values(contacts).map(({ icon, text }) => (
                <ContactBox key={crypto.randomUUID()}>
                  <Icon src={icon} />
                  <ContactText>{text}</ContactText>
                </ContactBox>
              ))}
            </Box>
          </Container>

          <Container>
            <Heading>Social Media</Heading>
            <Socials>
              {Object.values(socialMedia).map(icon => (
                <Link tabIndex={0} href="#" key={crypto.randomUUID()}>
                  <Icon src={icon} />
                </Link>
              ))}
            </Socials>
          </Container>
        </Content>

        <Copyright>Copyright &copy; {new Date().getFullYear()}. All rights reserved.</Copyright>
      </Wrapper>
    </StyledFooter>
  );
};

export default Footer;
