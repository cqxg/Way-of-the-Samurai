import React from 'react';
import ReactDOM from 'react-dom';

import * as serviceWorker from './serviceWorker';

import App from './App';
import store from './redux/reduxStore';

import './index.css';
import storeContext from './store/storeContext';

const rerenderEntireTree = () => {
    ReactDOM.render(
        <storeContext.Provider value={store}>
            <App />
        </storeContext.Provider >, document.getElementById('root')
    );
};

const initState = () => {
    const state = store.getState();
    rerenderEntireTree(state);
};

initState();

store.subscribe(initState);

serviceWorker.unregister();
