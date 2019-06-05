import styled from 'styled-components';
import Img from '../../../public/Graphic.svg';

const HeroGraphic = styled.img.attrs({
  src: Img,
  alt: 'MLM',
})`
  display: block;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
`;

export default HeroGraphic;
