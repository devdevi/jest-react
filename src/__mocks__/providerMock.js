import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import reducer from '../reducers';

import initialState from '../initialState';

const store = createStore(reducer, initialState);
const history = createBrowserHistory();

const ProviderMock = (props) => {
  return (
    <Provider store={store}>
      <Router history={history}>{props.children}</Router>
    </Provider>
  );
};

export default ProviderMock;
