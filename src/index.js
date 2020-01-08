import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import App from './App';
import store from './redux/state';


import './index.css';

const rerenderEntireTree = () => {
    ReactDOM.render(<App state={store.getState()} addPost={store.addPost} updateNewPostText={store.updateNewPostText} />, document.getElementById('root'));
};

rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree);

serviceWorker.unregister();
