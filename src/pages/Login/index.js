import React from 'react';
import Lottie from 'lottie-react-native';

import {Container} from './styles';
import Input from '../../components/Input';
import ButtonSubmit from '../../components/ButtonSubmit';

import {addEmail, addPassword} from '../../actions/users';
import deploy from '../../assets/animations/deploy.json';

export default function Login() {
  return (
    <Container>
      <Lottie
        source={deploy}
        autoPlay
        loop
        style={{
          width: '100%',
          height: 300,
        }}
      />

      <Input
        focus={true}
        type="email-address"
        iconName="email"
        iconSize={20}
        iconColor="gray"
        color="gray"
        background="#FFF"
        width="75%"
        placeholder="Email"
        action={addEmail}
      />
      <Input
        focus={false}
        type="password"
        iconName="vpn-key"
        iconSize={20}
        iconColor="gray"
        color="gray"
        background="#FFF"
        width="75%"
        placeholder="Senha"
        action={addPassword}
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
        background="rgba(0, 0, 0, 0);"
        color="#7159c1"
        width="80%"
        margin="0"
      />
      <ButtonSubmit
        text="Esqueceu a senha?"
        background="rgba(0, 0, 0, 0);"
        color="rgba(0, 0, 0, 0.2)"
        width="80%"
        margin="10px 0 0 0"
      />
    </Container>
  );
}
