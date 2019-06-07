import React from 'react';
import styled from 'styled-components';
import _map from 'lodash/map';
import { H1 } from '../atoms/Headers';
import HR from '../atoms/HR';
import Rating from '../molecules/Rating';
import theme from '../../theme';

const { colors } = theme;
const { LIGHT_GRAY } = colors;
const SKILLS_DATA_1 = [
  { skill: 'React', stars: 5 },
  { skill: 'Redux', stars: 5 },
  { skill: 'Express', stars: 5 },
  { skill: 'PostgreSQL', stars: 5 },
  { skill: 'MySQL', stars: 5 },
  { skill: 'Node.js', stars: 5 },
  { skill: 'Webpack', stars: 5 },
  { skill: 'Styled Components', stars: 5 },
  { skill: 'Docker', stars: 5 },
  { skill: 'RESTful APIs', stars: 5 },
];
const SKILLS_DATA_2 = [
  { skill: 'Database Architecture', stars: 4 },
  { skill: 'Raw SQL', stars: 4 },
  { skill: 'Rails', stars: 3 },
  { skill: 'Ruby', stars: 3 },
  { skill: 'AngularJS', stars: 3 },
  { skill: 'Solidity', stars: 2 },
  { skill: 'Python', stars: 2 },
  { skill: 'Kafka', stars: 2 },
  { skill: 'Git, GitHub, BitBucket', stars: 5 },
  { skill: 'Agile, Jira, Trello', stars: 5 },
];

const Container = styled.div`
  background-color: ${LIGHT_GRAY};
  width: 100vw;
  padding-bottom: 50px;
`;
const Title = styled(H1)`
  padding-top: 30px;
  text-align: center;
`;
const Row = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: flex-start;
  box-sizing: border-box;
  width: 100%;
  padding: 0 75px;
`;
const Column = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0 30px;
`;
const Skills = props => (
  <Container id="Skills" {...props}>
    <Title>Skills</Title>
    <HR />
    <Row>
      <Column>
        {_map(SKILLS_DATA_1, obj => (
          <Rating key={obj.skill} {...obj} />
        ))}
      </Column>
      <Column>
        {_map(SKILLS_DATA_2, obj => (
          <Rating key={obj.skill} {...obj} />
        ))}
      </Column>
    </Row>
  </Container>
);

export default Skills;
