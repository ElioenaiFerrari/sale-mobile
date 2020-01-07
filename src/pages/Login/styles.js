import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

export const Container = styled.KeyboardAvoidingView.attrs({
  behavior: 'padding',
})`
  width: ${Dimensions.get('screen').width};
  height: ${Dimensions.get('screen').height};
  background: #eb626b;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 40px;
`;
