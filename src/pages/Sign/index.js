import React from 'react';
import Lottie from 'lottie-react-native';
// Components
import {Container} from './styles';
import {Input, ButtonSubmit} from '../../components';
// Others
import animation from '../../assets/animations/deploy.json';
import api from '../../services/api';
import {addEmail, addPassword, addCell} from '../../actions/users';
import {useSelector} from 'react-redux';

export default function Sign(props) {
  const users = useSelector(state => state.users);

  async function handleEmail() {
    try {
      const response = await api.post('/users', {
        email: users.email,
        password: users.password,
        cellphone: users.cellphone,
      });

      alert('Conta criada com sucesso!');
      return props.navigation.navigate('Login');
    } catch (error) {
      if (error.response.status === 500) {
        alert('Esse email já está sendo usado');
      }
    }
  }

  return (
    <Container>
      <Lottie
        source={animation}
        autoPlay
        loop
        style={{height: 250, marginBottom: 10}}
      />
      <Input
        focus={true}
        type="email-address"
        iconName="email"
        iconSize={20}
        iconColor="#eb626b"
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
        iconColor="#eb626b"
        color="gray"
        background="#FFF"
        width="75%"
        placeholder="Senha"
        action={addPassword}
      />
      <Input
        focus={false}
        type="numeric"
        iconName="smartphone"
        iconSize={20}
        iconColor="#eb626b"
        color="gray"
        background="transparent"
        width="75%"
        placeholderTextColor="#fff"
        placeholder="DDD + Celular"
        action={addCell}
      />
      <ButtonSubmit
        text="Criar conta"
        background="#eb626b"
        color="#FFF"
        width="80%"
        margin="20px 0 10px 0"
        action={() => handleEmail()}
      />
      <ButtonSubmit
        text="Já tenho uma conta"
        background="#2e2151"
        color="#FFF"
        width="70%"
        margin="0"
        action={() => props.navigation.navigate('Login')}
      />
    </Container>
  );
}
