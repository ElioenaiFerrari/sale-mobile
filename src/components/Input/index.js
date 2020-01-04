import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {Container, InputText} from './styles';

export default function Input(props) {
  const users = useSelector(state => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(users);
  }, [users]);

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
      <InputText
        props={props}
        onEndEditing={event => dispatch(props.action(event.nativeEvent.text))}
      />
    </Container>
  );
}
