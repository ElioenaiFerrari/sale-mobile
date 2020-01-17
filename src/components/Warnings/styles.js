import styled from 'styled-components/native';
import {lightColor, darkColor} from '../../colors';

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
  flex: 1;
  max-height: 300px;
  flex-direction: row;
  padding: 15px;
  background: #fff;
  justify-content: flex-start;
  elevation: 4;
  margin: 5px 0;
  border-radius: 4px;
  flex-wrap: wrap;
`;

export const Description = styled.Text`
  color: #2e2151;
  font-size: 18px;
  margin-left: 20px;
  font-weight: bold;
`;

export const LeftView = styled.View`
  width: 100%;
  height: 90%;
  align-self: center;
  background: ${darkColor};
  align-items: center;
  padding: 0 20px;
  border-radius: 4px;
  flex-direction: row;
`;

export const LeftViewText = styled.Text`
  font-size: 22px;
  color: ${lightColor};
  margin-left: 10px;
`;
