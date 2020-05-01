import React from 'react';
import { PersistGate } from 'redux-persist/integration/react'; //added
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import './config/ReactotronConfig';
import GlobalStyle from './styles/global';
import Header from './components/Header';
import Routes from './routes';

import history from './services/history';
import { store, persistor } from './store';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}> {/*  PersistGate will render after get store informations */}
        <Router history={history}>
          <GlobalStyle />
          <Header />
          <Routes />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
