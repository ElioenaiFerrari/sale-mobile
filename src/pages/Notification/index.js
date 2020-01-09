import React from 'react';
/**
 * Warning is the notices with UCV
 * cash buy
 * re-register
 * pending documents
 * etc...
 */
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
