import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import configureStore from './store';
import './scss/styles.scss';
import 'typeface-roboto';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={configureStore()}>
      <App />
    </Provider>, div,
  );
  ReactDOM.unmountComponentAtNode(div);
});
