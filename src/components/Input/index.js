import React from 'react';
/**
 * Input are the simple textInput that have functions, icons and dispatch data
 */
import {useDispatch} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {Container, InputText, Touch} from './styles';

const Input = React.memo(props => {
  const dispatch = useDispatch();

  return (
    /**
     * Verify if exists icons
     * If not, icons returns null
     */
    <Container>
      {props.iconName && (
        <Touch onPress={props.iconAction ? props.iconAction : null}>
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
        // eslint-disable-next-line react-hooks/exhaustive-deps
        onChangeText={React.useCallback(
          event => {
            dispatch(props.action(event));
          },
          // eslint-disable-next-line react-hooks/exhaustive-deps
          [],
        )}
      />
      {props.icon2Name && (
        <Touch onPress={props.icon2Action ? props.icon2Action : null}>
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
});

export default Input;
