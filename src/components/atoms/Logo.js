import styled from 'styled-components';
import Img from '../../../public/MLM_Logo.png';

const Logo = styled.img.attrs({
  src: Img,
  alt: 'Logo',
})`
  display: block;
  max-width: 40vw;
  max-height: 60px;
`;

export default Logo;
