import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import _times from 'lodash/times';
import _map from 'lodash/map';
import Star from '../atoms/Star';
import P from '../atoms/P';
import theme from '../../theme';

const { colors } = theme;
const { DARK_GRAY, LIGHT_GRAY } = colors;

const Container = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  max-width: 400px;
  width: 80vw;
  padding: 2.5px 20px;
  box-sizing: border-box;
  border-radius: 5px;
  &:hover {
    span {
      color: gold;
      font-size: 31px;
      transition: font-size 0.5s ease;
    }
    background-color: ${DARK_GRAY};
    p {
      color: ${LIGHT_GRAY};
    }
  }
`;
const StarContainer = styled.div`
  width: 150px;
  height: 30px;
`;
const Rating = ({ skill, stars, ...props }) => (
  <Container {...props}>
    <P>{skill}</P>
    <StarContainer>
      {_map(_times(stars, String), val => (
        <Star key={val} />
      ))}
    </StarContainer>
  </Container>
);

Rating.propTypes = {
  skill: PropTypes.string.isRequired,
  stars: PropTypes.number.isRequired,
};

export default Rating;
