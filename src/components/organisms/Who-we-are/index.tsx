import { Highlight } from '../../atoms/typography';
import { ContentBox, Heading, Image, ImageBox, Section, Description } from './styles';

const WhoWeAre = () => (
  <Section id="who-we-are">
    <ImageBox>
      <Image src="./assets/who-we-are.png" alt="head with visible skull" />
    </ImageBox>
    <ContentBox>
      <Heading>
        <Highlight transform="capitalize">Who we are</Highlight>
      </Heading>

      <Description fz="md" fw="800" my="2.4rem">
        We Help Web3 Brands Grow!
      </Description>
      <Description fz="md" mb="1.8rem" fw="500" lh="1.6" opacity="0.8">
        Founded by individuals who have already successfully created and launched profitable Web3 projects along with experts in the marketing arena with a combined 40 years experience.
      </Description>
      <Description fz="md" fw="500" lh="1.6" opacity="0.8">
        Together we help build powerful brands & digital experiences. Our focus is on the community, the technology & the market to launch your brand's vision for an optimistic new internet.
      </Description>
    </ContentBox>
  </Section>
);

export default WhoWeAre;
