import React from 'react';

import {Button, ButtonText} from './styles';

export default function ButtonSubmit(props) {
  return (
    <Button props={props}>
      <ButtonText onPress={() => props.action()} props={props}>
        {props.text}
      </ButtonText>
    </Button>
  );
}
