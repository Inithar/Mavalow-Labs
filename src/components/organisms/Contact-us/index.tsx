import { Button, Icon } from '../../atoms/elements';
import { H2, Highlight, Text } from '../../atoms/typography';
import { Content, Form, FormBox, Heading, OptionBox, Section, TextBox, Input, TextArea } from './styles';

import { contactOptions } from '../../../data/data.json';

const ContactUs = () => (
  <Section id="contact-us">
    <H2 align="center">
      Ready To Dominate Web3? <Highlight>Get In Touch Today</Highlight>.
    </H2>

    <Content>
      <TextBox>
        <Heading>We Help Clients See The Bigger Picture To Unleash Growth</Heading>
        <Text fz="lg" lh="1.67" my="1rem">
          But first, let's:
        </Text>

        {contactOptions.map(option => (
          <OptionBox key={crypto.randomUUID()}>
            <Icon src={option.icon} alt="" />
            <Text fz="lg" lh="1.67" fw="500" ml="2rem">
              {option.text}
            </Text>
          </OptionBox>
        ))}
      </TextBox>

      <Form>
        <FormBox>
          <Input placeholder="First Name *" />
          <Input placeholder="Phone" />
          <Input placeholder="Email *" />
          <Input placeholder="Country *" />
          <TextArea placeholder="Message *" />
        </FormBox>

        <Button mx="auto" mt="3rem">
          Send Message
        </Button>
      </Form>
    </Content>
  </Section>
);

export default ContactUs;
