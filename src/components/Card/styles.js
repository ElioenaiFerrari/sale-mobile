import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #eee;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  width: 100%;
`;

export const ListItem = styled.View`
  height: 220px;
  background: #fff;
  margin: 5px 10px;
  padding: 5px;
  border-radius: 2px;
  elevation: 2;
`;

export const ListHeader = styled.View`
  border-bottom-width: 0.5px;
  border-bottom-color: #eee;
  height: 70%;
`;

export const Title = styled.Text`
  text-align: center;
  font-size: 18px;
  color: rgba(0, 0, 0, 0.3);
  font-weight: bold;
`;

export const Image = styled.Image.attrs({resizeMode: 'cover'})`
  flex: 1;
  border-radius: 2px;
`;

export const ListContent = styled.View`
  margin-top: 5px;
`;

export const Content = styled.Text`
  font-size: 16px;
  color: rgba(0, 0, 0, 0.4);
  text-align: justify;
`;

export const ListFooter = styled.View``;
