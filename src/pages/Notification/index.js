import React from 'react';

import {Container} from './styles';
import {Warnings} from '../../components';

export default function Notification() {
  return (
    <Container>
      <Warnings />
      <Warnings />
    </Container>
  );
}
