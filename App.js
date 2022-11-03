import React from 'react';
import { store, persistor } from './src/config/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Router from './src/router';
import FlashMessage from 'react-native-flash-message';

const App = () => {
  return (
    <Provider store={ store }>
      <PersistGate persistor={ persistor }>
        <Router />
      </PersistGate>
      <FlashMessage position='top' floating={ true } />
    </Provider>
  );
};

export default App;
