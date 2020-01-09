import React, {useState, useEffect} from 'react';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';

import store from './store';
import {isSignedIn} from './services/auth';
import Route from './routes';

export default function App() {
  useEffect(() => {
    isSignedIn()
      .then(res => setLogged(res))
      .catch(error => alert(error));
  }, []);

  const [logged, setLogged] = useState(false);
  const Routes = Route(logged);

  return (
    <Provider store={store}>
      <StatusBar backgroundColor="#2e2151" barStyle="light-content" />
      <Routes />
    </Provider>
  );
}
