import styled from 'styled-components/native';
import {Animated} from 'react-native';
import {lightColor} from '../../colors';

export const Container = styled.View`
  flex: 1;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  flex: 1;
  padding: 0 10px;
  background: #fff;
`;

export const ListItem = styled.View`
  flex-direction: row;
  padding: 0 15px;
  background: #fff;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100px;
  elevation: 4;
  margin: 5px 0;
  border-radius: 4px;
`;

export const Description = styled.Text`
  color: #2e2151;
  font-size: 18px;
  margin-left: 20px;
  font-weight: bold;
`;

export const LeftView = styled.View`
  width: 100%;
  height: 100px;
  background: ${lightColor};
`;

export const LeftViewText = styled.Text``;
