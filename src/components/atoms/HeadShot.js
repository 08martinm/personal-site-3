import styled from 'styled-components';
import MyPhoto from '../../../public/MattMartin_HeadShot.jpeg';
import theme from '../../theme';

const { colors } = theme;
const { DARK_GRAY } = colors;

const HeadShot = styled.img.attrs({
  src: MyPhoto,
  alt: 'My face',
})`
  border-radius: 50%;
  width: 200px;
  height: 200px;
  border: 5px solid ${DARK_GRAY};
`;

export default HeadShot;
