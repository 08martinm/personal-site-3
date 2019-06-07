import styled from 'styled-components';
import Img from '../../../public/Graphic.png';

const HeroGraphic = styled.img.attrs({
  src: Img,
  alt: 'MLM',
})`
  display: block;
  max-width: 100vw;
  max-height: 30vh;
`;

export default HeroGraphic;
