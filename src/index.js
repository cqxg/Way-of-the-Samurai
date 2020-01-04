import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import App from './App';

import './index.css';

const posts = [
  {
    id: '1',
    message: 'Hi, how are you',
    likesCount: '12',
  },
  {
    id: '2',
    message: 'It`s my first posts',
    likesCount: '7',
  },
];

const dialogs = [
  {
    id: '1',
    name: '105',
  },
  {
    id: '2',
    name: 'FrinteZz',
  },
  {
    id: '3',
    name: 'Gaming',
  },
  {
    id: '4',
    name: 'Pominki',
  },
  {
    id: '5',
    name: 'Side',
  },
  {
    id: '6',
    name: 'EFsquad',
  },
];

const messages = [
  {
    id: '1',
    message: 'qq all',
  },
  {
    id: '2',
    message: 'hello world',
  },
  {
    id: '3',
    message: 'priveti4 ot Marmeladi4a',
  },
];


ReactDOM.render(<App posts={posts} dialogs={dialogs} messages={messages} />, document.getElementById('root'));


serviceWorker.unregister();
