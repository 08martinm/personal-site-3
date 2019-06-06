import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { H3, H4 } from '../atoms/Headers';
import CollapseBar from '../atoms/CollapseBar';

const BREAK_POINT = '800px';

const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: flex-start;
  overflow: hidden;
  cursor: pointer;
  padding-top: 20px;
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
  position: relative;
  &.uncollapsed {
    max-height: 500vh;
    transition: max-height 0.75s linear 0s;
  }
  &.collapsed {
    max-height: 200px;
    transition: max-height 0.75s linear 0s;
  }
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
const Credential = ({ name, position, description, ...props }) => {
  const [collapsed, setCollapsed] = useState(true);
  const toggleCollapsed = () => setCollapsed(!collapsed);
  const handleKeyPress = e => {
    const key = e.keyCode || e.which;
    if (key === 13) {
      toggleCollapsed();
    }
  };
  return (
    <Container {...props} onClick={toggleCollapsed}>
      {name && (
        <NameContainer>
          <Name>{name}</Name>
        </NameContainer>
      )}
      <ContentContainer className={collapsed ? 'collapsed' : 'uncollapsed'}>
        <Position>{position}</Position>
        {description}
        <CollapseBar
          onKeyPress={handleKeyPress}
          tabIndex="0"
          className={collapsed && 'collapsed'}
        />
      </ContentContainer>
    </Container>
  );
};

Credential.propTypes = {
  name: PropTypes.string,
  position: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
Credential.defaultProps = {
  name: '',
};

export default Credential;
