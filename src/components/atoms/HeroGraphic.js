import styled from 'styled-components';
import Img from '../../../public/Graphic.svg';

const HeroGraphic = styled.img.attrs({
  src: Img,
  alt: 'MLM',
})`
  display: block;
  width: 100vw;
`;

export default HeroGraphic;
