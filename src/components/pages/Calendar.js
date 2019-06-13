import React, { Component } from 'react';
import styled from 'styled-components';
import { CircleLoader } from 'react-spinners';
import { H1, H3 } from '../atoms/Headers';
import HR from '../atoms/HR';
import P from '../atoms/P';
import Navbar from '../molecules/Navbar';
import LinkedInLink from '../molecules/LinkedInLink';
import theme from '../../theme';
import { FullPageBackground, Column } from '../atoms/Containers';

const { colors } = theme;
const { LIGHTEST_GRAY } = colors;

const Content = styled(Column)`
  max-width: 600px;
`;
const ScheduleForm = styled.div`
  width: 320px;
  height: 580px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  position: relative;
`;
const Loader = styled.div`
  position: absolute;
  left: 50%;
  top: 33%;
  transform: translate(-50%, -50%);
`;
const Title = styled(H1)`
  padding-top: 30px;
  color: ${LIGHTEST_GRAY};
  text-align: center;
  color: ${LIGHTEST_GRAY};
`;
const SubTitle = styled(H3)`
  margin: 30px 0 0;
  padding: 0 25px;
  color: ${LIGHTEST_GRAY};
  font-weight: bold;
`;
const StyledHR = styled(HR)`
  border-color: ${LIGHTEST_GRAY};
`;
const Text = styled(P)`
  padding: 25px;
  color: ${LIGHTEST_GRAY};
`;
const LinkedIn = styled(LinkedInLink)`
  margin: 0 0 50px;
`;

class Calendar extends Component {
  componentDidMount() {
    const head = document.querySelector('head');
    const script = document.createElement('script');
    script.setAttribute(
      'src',
      'https://assets.calendly.com/assets/external/widget.js',
    );
    script.setAttribute('id', 'calendly-script');
    script.setAttribute('type', 'text/javascript');
    head.appendChild(script);
  }

  componentWillUnmount() {
    const el = document.getElementById('calendly-script');
    el.remove();
  }

  render() {
    return (
      <FullPageBackground>
        <Navbar />
        <Title>Connect</Title>
        <StyledHR />
        <Content>
          <SubTitle>Let{`'`}s chat!</SubTitle>
          <Text spaced>
            I’m so glad you’ve taken the time to reach out. Feel free to book a
            10-minute window below. It would really help me if in the details
            section you mention what you hope to chat about.
          </Text>
          <ScheduleForm id="schedule_form">
            <Loader>
              <CircleLoader
                size={200}
                color={LIGHTEST_GRAY}
                sizeUnit="px"
                loading
              />
            </Loader>
            <div
              className="calendly-inline-widget"
              data-url="https://calendly.com/matthewlmartin/15min"
              style={{ minWidth: 320, height: 580 }}
            />
          </ScheduleForm>
          <SubTitle>Just looking?</SubTitle>
          <Text spaced>
            Not ready yet to meet? No worries. Here’s some other places that you
            can find me:
          </Text>
          <LinkedIn />
        </Content>
      </FullPageBackground>
    );
  }
}

export default Calendar;
