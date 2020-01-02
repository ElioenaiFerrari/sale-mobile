import React from 'react';

import {StatusBar} from 'react-native';
import Routes from './routes';

// import { Container } from './styles';

const App = () => (
  <>
    <StatusBar backgroundColor="#191919" barStyle="light-content" />
    <Routes />
  </>
);

export default App;
