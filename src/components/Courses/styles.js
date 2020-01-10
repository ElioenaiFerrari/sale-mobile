import styled from 'styled-components/native';
import {lightColor} from '../../colors';

export const Container = styled.View`
  width: 70%;
  border-radius: 50px;
  background: transparent;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  elevation: 4;
  margin-bottom: 20px;
  border-width: 1px;
  border-color: ${lightColor};
  border-top-left-radius: 0;
`;

export const CourseList = styled.Picker`
  width: 100%;
  color: #fff;
`;
