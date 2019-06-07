import React, { Component } from 'react';
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
  box-sizing: border-box;
  cursor: ${props => (props.height > 200 ? 'pointer' : 'auto')};
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
  transition: max-height 0.75s ease;
  &.uncollapsed {
    max-height: ${props => `${props.height}px`};
  }
  &.collapsed {
    max-height: 200px;
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
class Credential extends Component {
  state = {
    collapsed: false,
  };

  componentDidMount() {
    const height = this.divElement.clientHeight;
    this.height = height;
    this.setState({ collapsed: true });
  }

  toggleCollapsed = () =>
    this.setState(state => ({ collapsed: !state.collapsed }));

  handleKeyPress = e => {
    const key = e.keyCode || e.which;
    if (key === 13) {
      this.toggleCollapsed();
    }
  };

  render() {
    const { name, position, description, ...props } = this.props;
    const { collapsed } = this.state;
    return (
      <Container
        {...props}
        onClick={this.toggleCollapsed}
        ref={divElement => {
          this.divElement = divElement;
        }}
        height={this.height}
      >
        {name && (
          <NameContainer>
            <Name>{name}</Name>
          </NameContainer>
        )}
        <ContentContainer
          className={collapsed ? 'collapsed' : 'uncollapsed'}
          height={this.height}
        >
          <Position>{position}</Position>
          {description}
          {this.height > 200 && (
            <CollapseBar
              onKeyPress={this.handleKeyPress}
              tabIndex="0"
              className={collapsed && 'collapsed'}
            />
          )}
        </ContentContainer>
      </Container>
    );
  }
}

Credential.propTypes = {
  name: PropTypes.string,
  position: PropTypes.string.isRequired,
  description: PropTypes.node.isRequired,
};
Credential.defaultProps = {
  name: '',
};

export default Credential;
