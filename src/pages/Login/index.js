import React, {useState} from 'react';
import Lottie from 'lottie-react-native';
import {useSelector} from 'react-redux';

// Styles
import {Container} from './styles';
// Components
import {Input, ButtonSubmit} from '../../components';
// Actions
import {addEmail, addPassword} from '../../actions/users';
import animation from '../../assets/animations/alien.json';
import api from '../../services/api';

export default function Login(props) {
  const [secure, setSecure] = useState(true);

  const users = useSelector(state => state.users);

  async function auth() {
    try {
      if (users.email.length && users.password.length) {
        const response = await api.post('/auth', {
          email: users.email,
          password: users.password,
        });

        const {token} = await response.data;

        if (!token) {
          return alert('Email ou senha incorretos!');
        }

        return props.navigation.navigate('Main');
      } else {
        alert('Preencha todos os dados!');
      }
    } catch (error) {
      console.log(error.response.status);
    }
  }

  return (
    <Container>
      <Lottie
        source={animation}
        autoPlay
        loop={false}
        style={{
          height: 300,
        }}
      />
      <Input
        focus={true}
        type="email-address"
        iconName="email"
        iconSize={20}
        iconColor="#2e2151"
        color="#eee"
        background="transparent"
        placeholderTextColor="#eee"
        width="75%"
        placeholder="Email"
        action={addEmail}
        borderColor="#2e2151"
      />
      <Input
        focus={false}
        type="password"
        iconName="vpn-key"
        iconSize={20}
        iconColor="#2e2151"
        color="#eee"
        background="transparent"
        placeholderTextColor="#eee"
        width="75%"
        borderColor="#2e2151"
        placeholder="Senha"
        icon2Name="remove-red-eye"
        icon2Size={20}
        icon2Color="#2e2151"
        icon2Action={() => setSecure(!secure)}
        secure={secure}
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
