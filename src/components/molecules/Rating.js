import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import _times from 'lodash/times';
import _map from 'lodash/map';
import Star from '../atoms/Star';
import P from '../atoms/P';

const Container = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  width: 400px;
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
