import React from 'react';

import {Button, ButtonText} from './styles';

export default function ButtonSubmit(props) {
  return (
    <Button props={props}>
      <ButtonText props={props}>{props.text}</ButtonText>
    </Button>
  );
}
