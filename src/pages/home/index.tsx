import { Industries, Main, MarketingService, MarketingServiceBoxes, ProjectStages, Wrapper, YourProject, YourProjectBoxes } from './styles';

import { H2, Highlight } from '../../components/atoms/typography';
import { Button, LineBreak } from '../../components/atoms/elements';
import MarketingServiceBox from '../../components/molecules/Marketing-service-box';
import Mosaic from '../../components/molecules/Mosaic';
import YourProjectBox from '../../components/molecules/Your-project-box';
import Navigation from '../../components/organisms/Navigation';
import Header from '../../components/organisms/Header';
import WhoWeAre from '../../components/organisms/Who-we-are';
import ContactUs from '../../components/organisms/Contact-us';
import Footer from '../../components/organisms/Footer';

import { marketingServices, projectStage, yourProjectSteps, industries } from '../../data/data.json';

const Home = () => (
  <>
    <Wrapper>
      <Navigation />
      <Header />

      <Main>
        <MarketingService id="services">
          <H2 align="center" transform="capitalize">
            Bring your business goals to life with our strategic <LineBreak /> <Highlight transform="capitalize">Web 3 marketing services</Highlight>
          </H2>

          <MarketingServiceBoxes>
            {marketingServices.map(service => (
              <MarketingServiceBox service={service} key={crypto.randomUUID()} />
            ))}
          </MarketingServiceBoxes>
        </MarketingService>

        <ProjectStages>
          <H2 align="center" transform="capitalize">
            <Highlight transform="capitalize">We support you </Highlight> through key project stages <LineBreak /> including:
          </H2>

          <Mosaic data={projectStage} titleMinHeight="6.4rem" />
          <Button mx="auto">Tell Us About Your Project</Button>
        </ProjectStages>

        <YourProject>
          <H2 align="center" transform="capitalize">
            Tell us about your project
          </H2>

          <YourProjectBoxes>
            {yourProjectSteps.map(step => (
              <YourProjectBox data={step} key={crypto.randomUUID()} />
            ))}
          </YourProjectBoxes>
        </YourProject>

        <Industries id="industries">
          <H2 align="center" transform="capitalize">
            Helping some of the most promising start-ups <LineBreak breakFrom="medium" /> grow into <Highlight transform="capitalize">international brands</Highlight>.
          </H2>

          <Mosaic data={industries} />
          <Button mx="auto">Tell Us About Your Project</Button>
        </Industries>

        <WhoWeAre />
        <ContactUs />
      </Main>
    </Wrapper>

    <Footer />
  </>
);

export default Home;
