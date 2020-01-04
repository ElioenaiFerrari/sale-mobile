import styled from 'styled-components/native';

export const Button = styled.TouchableOpacity`
  width: ${props => props.props.width};
  background: ${props => props.props.background};
  margin: ${props => props.props.margin};

  border-radius: 4px;
  padding: 15px;
`;

export const ButtonText = styled.Text`
  color: ${props => props.props.color};
  font-size: 15px;
  text-align: center;
  font-weight: bold;
`;
