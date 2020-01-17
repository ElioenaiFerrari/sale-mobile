import React from 'react';
/**
 * The ButtonSubmit are component
 * Are used to dispatch a action click
 * Action is defined for your/developer
 * Is usual, practic and easy
 */
/**
 * action => Function defined for dev
 * props => propertys
 */

import {Button, ButtonText} from './styles';

const ButtonSubmit = React.memo(props => {
  return (
    <Button props={props}>
      <ButtonText onPress={props.action} props={props}>
        {props.text}
      </ButtonText>
    </Button>
  );
});

export default ButtonSubmit;
