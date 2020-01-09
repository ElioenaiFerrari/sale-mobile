import React, {useState} from 'react';
import Lottie from 'lottie-react-native';
// Components
import {Container} from './styles';
import {Input, ButtonSubmit} from '../../components';
// Others
import animation from '../../assets/animations/data-analysis.json';
import api from '../../services/api';
import {addEmail, addPassword, addCell, addName} from '../../actions/users';
import {useSelector} from 'react-redux';

export default function Sign(props) {
  const users = useSelector(state => state.users);
  const [secure, setSecure] = useState(true);

  async function handleSubmit() {
    try {
      if (
        users.email.length &&
        users.password.length &&
        users.cellphone.length &&
        users.name.length
      ) {
        await api.post('/register', {
          email: users.email,
          password: users.password,
          cellphone: users.cellphone,
          name: users.name,
        });
      } else {
        return alert('Preencha todos os dados');
      }

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
        style={{height: 280, marginBottom: '-20%'}}
      />
      <Input
        focus={false}
        type="text"
        iconName="person"
        iconSize={20}
        iconColor="#eb626b"
        color="gray"
        background="#FFF"
        width="70%"
        placeholder="Nome"
        action={addName}
      />
      <Input
        focus={false}
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
        type="text"
        secure={secure}
        iconName="vpn-key"
        iconSize={20}
        iconColor="#eb626b"
        color="gray"
        background="#FFF"
        width="70%"
        placeholder="Senha"
        icon2Name="remove-red-eye"
        icon2Size={20}
        icon2Color="#eb626b"
        icon2Action={() => setSecure(!secure)}
        action={addPassword}
      />
      <Input
        focus={false}
        type="numeric"
        iconName="smartphone"
        iconSize={20}
        iconColor="#eb626b"
        color="#eee"
        background="transparent"
        width="75%"
        placeholderTextColor="#eee"
        placeholder="DDD + Celular"
        action={addCell}
      />
      <ButtonSubmit
        text="Criar conta"
        background="#eb626b"
        color="#FFF"
        width="80%"
        margin="20px 0 10px 0"
        action={() => handleSubmit()}
      />
      <ButtonSubmit
        text="Tenho uma conta"
        background="#2e2151"
        color="#FFF"
        width="75%"
        margin="0"
        action={() => {
          props.navigation.navigate('Login');
        }}
      />
    </Container>
  );
}
