import React from 'react';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';

import Routes from './routes';

import store from './store';

const App = () => (
  <Provider store={store}>
    <StatusBar backgroundColor="#2e2151" barStyle="light-content" />
    <Routes />
  </Provider>
);

export default App;
