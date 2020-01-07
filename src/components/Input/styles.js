import styled from 'styled-components/native';

export const Container = styled.View`
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const InputText = styled.TextInput.attrs({
  placeholderTextColor: props => props.props.placeholderTextColor,
  placeholder: props => props.props.placeholder,
  keyboardType: props => props.props.type,
  secureTextEntry: props => (props.props.type === 'password' ? true : false),
  autoFocus: props => props.props.focus,
})`
  background: ${props => props.props.background};
  width: ${props => props.props.width};
  color: ${props => props.props.color};

  border-bottom-width: 1px;
  border-bottom-color: lightgray;

  padding: 10px 40px;
  border-radius: 4px;
  text-align: center;
  margin-bottom: 10px;
`;
