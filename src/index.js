import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import App from './App';
import state, { addPost, updateNewPostText, subscribe } from './redux/state';


import './index.css';

const rerenderEntireTree = () => {
  ReactDOM.render(<App state={state} addPost={addPost} updateNewPostText={updateNewPostText} />, document.getElementById('root'));
};

rerenderEntireTree(state);
subscribe(rerenderEntireTree);

serviceWorker.unregister();
