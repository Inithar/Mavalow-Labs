import { Text } from '../../atoms/typography';
import { Icon } from '../../atoms/elements';
import { Box, Heading } from './styles';

interface MarketingServiceBoxProps {
  service: {
    icon: string;
    heading: string;
    description: string;
  };
}

const MarketingServiceBox = ({ service }: MarketingServiceBoxProps) => {
  const { icon, heading, description } = service;

  return (
    <Box>
      <Icon src={icon} height="5.1rem" alt="" />
      <Heading>{heading}</Heading>
      <Text fz="md" lh="1.3" opacity="0.8">
        {description}
      </Text>
    </Box>
  );
};

export default MarketingServiceBox;
