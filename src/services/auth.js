import {AsyncStorage} from 'react-native';

/**
 *  Aqui será verificado se o usuário se encontra logado ou não
 */

export const onSignedIn = async token => {
  await AsyncStorage.setItem('AUTH_TOKEN', token);
};
export const onSignedOut = async () => {
  await AsyncStorage.removeItem('AUTH_TOKEN');
};

export const isSignedIn = async () => {
  const token = await AsyncStorage.getItem('AUTH_TOKEN');

  if (token) {
    return true;
  }
  return false;
};
