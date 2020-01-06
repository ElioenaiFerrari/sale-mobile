import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {Login, Main} from '../pages';
import Tabs from './Tabs';

const Routes = createAppContainer(
  createSwitchNavigator({
    Login,
    Main: Tabs,
  }),
);

export default Routes;
