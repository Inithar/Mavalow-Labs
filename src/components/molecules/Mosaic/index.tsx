import { MosaicBoxes, Box, Title } from './styles';
import { Icon } from '../../atoms/elements';

interface MosaicProps {
  data: {
    icon: string;
    title: string;
  }[];
  titleMinHeight?: string;
  iconHeight?: string;
}

const Mosaic = ({ data, titleMinHeight, iconHeight }: MosaicProps) => (
  <MosaicBoxes>
    {data.map(item => (
      <Box key={crypto.randomUUID()}>
        <Icon src={item.icon} height={iconHeight || '5.1rem'} alt="" />
        <Title minHeight={titleMinHeight}>{item.title}</Title>
      </Box>
    ))}
  </MosaicBoxes>
);

export default Mosaic;
