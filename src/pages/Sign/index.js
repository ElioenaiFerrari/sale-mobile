import React, {useState} from 'react';
import Lottie from 'lottie-react-native';
/**
 * Redux
 * Styles
 * Components
 * Services
 */
import {useSelector} from 'react-redux';
import {Container} from './styles';
import {Input, ButtonSubmit, Courses} from '../../components';
import api from '../../services/api';
/**
 * Redux users actions dispatch
 * Animation Lottie path
 */
import {addEmail, addPassword, addName} from '../../actions/users';
import animation from '../../assets/animations/data-analysis.json';
import {lightColor} from '../../colors';

export default function Sign(props) {
  const users = useSelector(state => state.users);
  /**
   * If true => Hidden password
   * else => Show password
   * Touch the eye icon to you see
   */
  const [secure, setSecure] = useState(true);

  /**
   * Create account function
   */
  async function handleSubmit() {
    /**
     * The inputs not are nullable
     */
    try {
      if (users.email.length && users.password.length && users.course.length) {
        /**
         * If all inputs not are nullable
         * POST /register in API
         * create tables items
         */
        await api.post('/register', {
          email: users.email,
          password: users.password,
          access: 'client',
          course: users.course,
        });
        /**
         * If at least one input on null
         */
      } else {
        return alert('Preencha todos os dados');
      }
      /**
       * Success on create account
       * have a good time!
       */
      alert('Conta criada com sucesso!');
      /**
       * Navigate to login
       * Login with you have email and password
       */
      return props.navigation.navigate('Login');
    } catch (error) {
      if (error.response.status === 500) {
        alert('Esse email já está sendo usado');
      } else {
        console.log('============' + error);
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
      {/* <Input
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
      /> */}
      <Input
        focus={false}
        type="email-address"
        iconName="email"
        iconSize={20}
        iconColor="#eb626b"
        color="gray"
        background="#FFF"
        width="70%"
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
      {/*
          The dispatch redux on the includes inside component 'Courses'
        */}
      <Courses />
      <ButtonSubmit
        text="Criar conta"
        background={lightColor}
        color="#fff"
        width="72%"
        margin="20px 0 10px 0"
        action={() => handleSubmit()}
      />
      <ButtonSubmit
        text="Tenho uma conta"
        background="#2e2151"
        color="#FFF"
        width="72%"
        margin="0"
        action={() => {
          props.navigation.navigate('Login');
        }}
      />
    </Container>
  );
}
