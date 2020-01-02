import styled from 'styled-components/native';

export const Container = styled.View`
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const InputText = styled.TextInput.attrs({
  placeholder: props => props.props.placeholder,
  keyboardType: props => props.props.type,
  secureTextEntry: props => (props.props.type === 'password' ? true : false),
})`
  background: ${props => props.props.background};
  width: ${props => props.props.width};
  color: ${props => props.props.color};

  border-bottom-width: 0.5px;
  border-bottom-color: gray;
  padding: 10px 40px;
  border-radius: 4px;
  text-align: center;
  margin-bottom: 10px;
`;
