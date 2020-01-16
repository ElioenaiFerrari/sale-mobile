import styled from 'styled-components/native';
import {lightColor, darkColor} from '../../colors';

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
  height: 230px;
  background: ${darkColor};
  margin: 10px 5px;
  border-radius: 10px;
  elevation: 5;
`;

export const ListHeader = styled.View`
  border-bottom-width: 0.5px;
  border-bottom-color: #eee;
  height: 100%;
`;

export const Title = styled.Text`
  text-align: center;
  font-size: 35px;
  color: ${lightColor};
  z-index: 1;
  font-weight: bold;
`;

export const Image = styled.Image.attrs({resizeMode: 'cover'})`
  flex: 1;
  opacity: 0.2;
  border-radius: 2px;
`;

export const ListContent = styled.View``;

export const Content = styled.Text`
  font-size: 18px;
  color: #fff;
  font-weight: bold;
  text-align: justify;
`;
