import styled from 'styled-components/native';
import wallpaper from '../../assets/background.jpg';

export const Container = styled.KeyboardAvoidingView.attrs({
  behavior: 'height',
})`
  flex: 1;
  flex-direction: column;
  background: #fff;
  justify-content: flex-end;
  align-items: center;
  padding-bottom: 40px;
`;
