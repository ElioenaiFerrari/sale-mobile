import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import {Main, Warning} from '../pages';

const Tabs = createBottomTabNavigator(
  {
    Main: {
      screen: Main,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon name="home" color={tintColor} size={25} />
        ),
      },
    },
    Warning: {
      screen: Warning,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon name="person" color={tintColor} size={25} />
        ),
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: '#FFF',
      inactiveTintColor: 'rgba(255, 255, 255, 0.5)',
      showLabel: false,
      style: {
        backgroundColor: '#eb626b',
      },
    },
    initialRouteName: 'Main',
    style: {
      backgroundColor: 'blue',
    },
  },
);

export default Tabs;
