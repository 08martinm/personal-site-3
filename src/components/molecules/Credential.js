import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { H3, H4 } from '../atoms/Headers';

const BREAK_POINT = '800px';

const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: flex-start;
`;
const NameContainer = styled.div`
  flex: 0 0 200px;
  box-sizing: border-box;
  padding-right: 20px;
  @media (max-width: ${BREAK_POINT}) {
    flex-flow: column nowrap;
    align-items: center;
  }
`;
const ContentContainer = styled.div`
  flex: 0 1 600px;
`;
const Name = styled(H3)`
  font-weight: bold;
  @media (max-width: ${BREAK_POINT}) {
    text-align: center;
  }
`;
const Position = styled(H4)`
  font-weight: bold;
  @media (max-width: ${BREAK_POINT}) {
    text-align: center;
  }
`;
const Credential = ({ name, position, description, ...props }) => (
  <Container {...props}>
    <NameContainer>
      <Name>{name}</Name>
    </NameContainer>
    <ContentContainer>
      <Position>{position}</Position>
      {description}
    </ContentContainer>
  </Container>
);

Credential.propTypes = {
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Credential;
