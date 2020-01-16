import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';
import {Main, Notification} from '../pages';
import {darkColor, lightColor} from '../colors';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';

const Tabs = createMaterialTopTabNavigator(
  {
    Main: {
      screen: Main,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon name="home" color={tintColor} size={25} />
        ),
      },
    },
    Notification: {
      screen: Notification,

      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon name="warning" color={tintColor} size={25} />
        ),
      },
    },
  },
  {
    tabBarOptions: {
      showLabel: false,
      showIcon: true,
      activeTintColor: lightColor,
      tabStyle: {
        backgroundColor: darkColor,
      },
    },

    initialRouteName: 'Main',
  },
);

export default Tabs;
