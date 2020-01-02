import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {Container, InputText} from './styles';

export default function Input(props) {
  return (
    <Container>
      {props.iconName && (
        <Icon
          style={{
            position: 'absolute',
            left: 0,
            marginLeft: 10,
            zIndex: 1,
          }}
          name={props.iconName}
          size={props.iconSize}
          color={props.iconColor}
        />
      )}
      <InputText props={props} />
    </Container>
  );
}
