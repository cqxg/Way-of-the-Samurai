import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import App from './App';
import state from './redux/state';
import { addPost } from './redux/state';


import './index.css';

ReactDOM.render(<App state={state} addPost={addPost} />, document.getElementById('root'));


serviceWorker.unregister();
