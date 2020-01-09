import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  flex: 1;
  padding: 0 10px;
  background: #eee;
`;

export const ListItem = styled.TouchableOpacity`
  flex-direction: row;
  padding: 0 15px;
  background: #fff;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 70px;
  elevation: 2;
  margin: 5px 0;
  border-radius: 4px;
`;

export const Description = styled.Text`
  color: #2e2151;
  font-size: 18px;
  margin-left: 20px;
  font-weight: bold;
`;
