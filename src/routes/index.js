import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import Tabs from './Tabs';
import Stack from './Stack';

const Routes = createAppContainer(
  createSwitchNavigator({
    Sign: Stack,
    Main: Tabs,
  }),
);

export default Routes;
