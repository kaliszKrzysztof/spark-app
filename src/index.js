import React from 'react';
import ReactDOM from 'react-dom';
import 'typeface-oswald';
import App from './containers/App';
import configureStore from './store/configureStore';

const store = configureStore();
// eslint-disable-next-line react/jsx-filename-extension
ReactDOM.render(<App store={store} />, document.getElementById('root'));