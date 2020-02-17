// @flow
import React from 'react';
import { Provider } from 'react-redux';
import rootStore from './redux/createStore';
import AppContainer from './scenes/AppContainer';

function App() {
  return (
    <Provider store={rootStore}>
      <AppContainer />
    </Provider>
  );
}

export default App;
