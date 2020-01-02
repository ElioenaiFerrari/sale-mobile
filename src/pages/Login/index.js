import React from 'react';

import {Container} from './styles';
import Input from '../../components/Input';
import ButtonSubmit from '../../components/ButtonSubmit';

export default function Login() {
  return (
    <Container>
      <Input
        type="email-address"
        iconName="email"
        iconSize={20}
        iconColor="gray"
        color="gray"
        background="#FFF"
        width="75%"
        placeholder="Email"
      />
      <Input
        type="password"
        iconName="vpn-key"
        iconSize={20}
        iconColor="gray"
        color="gray"
        background="#FFF"
        width="75%"
        placeholder="Senha"
      />
      <ButtonSubmit
        text="Entrar"
        background="#7159c1"
        color="#FFF"
        width="80%"
        margin="20px 0 0 0"
      />
      <ButtonSubmit
        text="Criar conta"
        background="#FFF"
        color="#7159c1"
        width="80%"
        margin="0"
      />
      <ButtonSubmit
        text="Esqueceu a senha?"
        background="#FFF"
        color="rgba(0, 0, 0, 0.2)"
        width="80%"
        margin="10px 0 0 0"
      />
    </Container>
  );
}
