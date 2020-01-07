import React from 'react';
import Lottie from 'lottie-react-native';
import {useSelector} from 'react-redux';

// Styles
import {Container} from './styles';
// Components
import {Input, ButtonSubmit} from '../../components';
// Actions
import {addEmail, addPassword} from '../../actions/users';
import animation from '../../assets/animations/read.json';
import api from '../../services/api';

export default function Login(props) {
  const users = useSelector(state => state.users);

  async function auth() {
    try {
      const response = await api.post('/auth', {
        email: users.email,
        password: users.password,
      });

      const {token} = await response.data;

      if (!token) {
        return alert('Email ou senha incorretos!');
      }

      return props.navigation.navigate('Main');
    } catch (error) {
      console.log(`Error in auth: ${error}`);
    }
  }

  return (
    <Container>
      <Lottie
        source={animation}
        autoPlay
        loop
        style={{
          height: 300,
          marginBottom: 10,
        }}
      />
      <Input
        focus={true}
        type="email-address"
        iconName="email"
        iconSize={20}
        iconColor="#2e2151"
        color="#2e2151"
        background="transparent"
        placeholderTextColor="#2e2151"
        width="75%"
        placeholder="Email"
        action={addEmail}
      />
      <Input
        focus={false}
        type="password"
        iconName="vpn-key"
        iconSize={20}
        iconColor="#2e2151"
        color="#2e2151"
        background="transparent"
        placeholderTextColor="#2e2151"
        width="75%"
        placeholder="Senha"
        action={addPassword}
      />
      <ButtonSubmit
        text="Entrar"
        background="#2e2151"
        color="#FFF"
        width="80%"
        margin="20px 0 0 0"
        action={() => auth()}
      />
      <ButtonSubmit
        text="Esqueceu a senha?"
        background="rgba(0, 0, 0, 0);"
        color="#FFF"
        width="80%"
        margin="10px 0 0 0"
      />
    </Container>
  );
}
