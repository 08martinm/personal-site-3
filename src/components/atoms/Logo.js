import styled from 'styled-components';
import Img from '../../../public/MLM_Logo.svg';

const Logo = styled.img.attrs({
  src: Img,
  alt: 'Logo',
})`
  display: block;
  height: 40px;
`;

export default Logo;
