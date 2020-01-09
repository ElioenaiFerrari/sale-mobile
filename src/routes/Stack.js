import {createStackNavigator} from 'react-navigation-stack';
import {Login, Sign} from '../pages';

const Stack = createStackNavigator(
  {
    Sign,
    Login,
  },
  {
    headerMode: 'none',
    initialRouteName: 'Sign',
  },
);

export default Stack;
