import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {Login, Main} from '../pages';

const Routes = createAppContainer(createSwitchNavigator({Login, Main}));

export default Routes;
