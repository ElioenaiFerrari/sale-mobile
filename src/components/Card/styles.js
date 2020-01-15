import styled from 'styled-components/native';
import {lightColor, darkColor} from '../../colors';
import {Dimensions} from 'react-native';

export const Container = styled.View`
  flex: 1;
  background: #eee;
  justify-content: center;
  align-items: center;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  width: 100%;
`;

export const Modal = styled.Modal.attrs({
  transparent: true,
})``;

export const ContentContainer = styled.View`
  flex: 1;
  margin: 150px 1px 0;
  background: ${darkColor};
  padding: 15px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

export const ListItem = styled.TouchableOpacity`
  height: 300px;
  background: #fff;
  margin: 10px;
  padding: 5px;
  border-radius: 4px;
  elevation: 5;
`;

export const ListHeader = styled.View`
  border-bottom-width: 0.5px;
  border-bottom-color: #eee;
  height: 80%;
`;

export const Title = styled.Text`
  text-align: center;
  font-size: 35px;
  color: ${lightColor};
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
  font-size: 18px;
  color: #fff;
  font-weight: bold;
  text-align: justify;
`;

export const ListFooter = styled.View`
  flex: 1;
  align-items: flex-end;
  justify-content: flex-end;
`;

export const Author = styled.Text`
  font-size: 14px;
  color: #eb626b;
  font-weight: bold;
`;
