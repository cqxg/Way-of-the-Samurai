import React from 'react';
import ReactDOM from 'react-dom';

import * as serviceWorker from './serviceWorker';

import App from './App';
import store from './redux/reduxStore';

import './index.css';

const rerenderEntireTree = (state) => {
    ReactDOM.render(<App state={state} dispatch={store.dispatch.bind(store)} store={store} />, document.getElementById('root'));
};

rerenderEntireTree(store.getState());
store.subscribe(() => {
    const state = store.getState();
    rerenderEntireTree(state);
});

serviceWorker.unregister();
