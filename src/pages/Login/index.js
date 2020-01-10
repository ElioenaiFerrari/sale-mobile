import React, {useState} from 'react';
import Lottie from 'lottie-react-native';
import {useSelector} from 'react-redux';
/**
 * Styles
 */
import {Container} from './styles';
/**
 * Actions of reducer users
 */
import {addEmail, addPassword} from '../../actions/users';
/**
 * Components
 */
import {Input, ButtonSubmit} from '../../components';

/**
 * Animation => Lottie JSON
 * api => axios baseURL
 * onSignedIn => Verify if exists JWT token
 */
import animation from '../../assets/animations/read.json';
import api from '../../services/api';
import {onSignedIn} from '../../services/auth';

export default function Login(props) {
  /*
   Change password visible or not
   */
  const [secure, setSecure] = useState(true);
  /**
   * Consult the users store and use
   */
  const users = useSelector(state => state.users);
  /**
   * Function to verify you email and password => Login
   */
  async function auth() {
    /**
     * Email and password not nullable
     */
    try {
      if (users.email.length && users.password.length) {
        const response = await api.post('/auth', {
          email: users.email,
          password: users.password,
        });
        /**
         * Extract JWT token
         */
        const {token} = await response.data;
        /**
         * If dont's exist token
         */
        if (!token) {
          //Return error
          return alert('Email ou senha incorretos!');
        }
        /**
         * The app stay login now
         */
        onSignedIn(token);
        /**
         * Go to main screen
         */
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
      {/*
        Lottie animation
       */}
      <Lottie
        source={animation}
        autoPlay
        loop
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
        width="70%"
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
        width="70%"
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
        width="72%"
        margin="20px 0 0 0"
        action={() => auth()}
      />
      <ButtonSubmit
        text="Esqueceu a senha?"
        background="rgba(0, 0, 0, 0);"
        color="#FFF"
        width="72%"
        margin="10px 0 0 0"
      />
    </Container>
  );
}
