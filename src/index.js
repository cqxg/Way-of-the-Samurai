import React from 'react';
import ReactDOM from 'react-dom';

import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux';

import store from './redux/reduxStore';
import App from './App';

import './index.css';

const rerenderEntireTree = () => {
    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>, document.getElementById('root'),
    );
};

rerenderEntireTree();

store.subscribe(() => {
    rerenderEntireTree();
});

serviceWorker.unregister();
