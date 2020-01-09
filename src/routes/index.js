import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import Tabs from './Tabs';
import Stack from './Stack';

const Route = (signed = false) => {
  return createAppContainer(
    createSwitchNavigator(
      {
        Sign: Stack,
        Main: Tabs,
      },
      {
        initialRouteName: signed ? 'Main' : 'Sign',
      },
    ),
  );
};

export default Route;
