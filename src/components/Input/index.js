import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {Container, InputText, Touch} from './styles';

export default function Input(props) {
  const dispatch = useDispatch();
  const users = useSelector(state => state.users);

  useEffect(() => {
    console.log(users);
  }, [users]);

  return (
    <Container>
      {props.iconName && (
        <Touch onPress={props.iconAction ? props.iconAction : ''}>
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
        </Touch>
      )}

      <InputText
        props={props}
        onChangeText={event => {
          dispatch(props.action(event));
        }}
      />
      {props.icon2Name && (
        <Touch onPress={props.icon2Action ? props.icon2Action : ''}>
          <Icon
            style={{
              position: 'absolute',
              right: 10,
              zIndex: 1,
            }}
            name={props.icon2Name}
            size={props.icon2Size}
            color={props.icon2Color}
          />
        </Touch>
      )}
    </Container>
  );
}
