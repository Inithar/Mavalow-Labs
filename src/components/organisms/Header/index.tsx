import { Box, StyledHeader, Image, ImageBox } from './styles';
import { H1, Text, Highlight } from '../../atoms/typography';
import { Button } from '../../atoms/elements';

const Header = () => (
  <StyledHeader>
    <ImageBox>
      <Image src="./assets/hero-image.png" alt="monkey with glasses and earphones" />
    </ImageBox>
    <Box>
      <H1 transform="capitalize">
        Become a brand utilizing a powerful ful-stack <Highlight transform="uppercase">web3</Highlight> agency
      </H1>
      <Text fz="lg" lh="1.33" mt="3.2rem" mb="4.8rem" opacity="0.8" fw="500">
        Together we help build powerful brands & digital experiences. Our focus is on the community, the technology & the market to launch your brand's vision for an optimistic new internet.
      </Text>
      <Button type="button">Tell us about your project</Button>
    </Box>
  </StyledHeader>
);

export default Header;
