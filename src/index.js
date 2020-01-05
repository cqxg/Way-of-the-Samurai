import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import App from './App';
import state from './redux/state';

import './index.css';

ReactDOM.render(<App state={state} />, document.getElementById('root'));


serviceWorker.unregister();
