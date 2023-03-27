import { Text } from '../../atoms/typography';
import { Box, Heading, Image, ImageBox, Number } from './style';

interface YourProjectBox {
  data: {
    image: string;
    number: string;
    heading: string;
    description: string;
  };
}

const YourProjectBox = ({ data }: YourProjectBox) => {
  const { image, number, heading, description } = data;

  return (
    <Box>
      <ImageBox>
        <Image src={image} alt="" />
      </ImageBox>
      <Number>{number}</Number>
      <Heading>{heading}</Heading>
      <Text fz="sm" fw="500" lh="1.78" opacity="0.8">
        {description}
      </Text>
    </Box>
  );
};

export default YourProjectBox;
