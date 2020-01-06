import * as serviceWorker from './serviceWorker';
import { rerenderEntireTree } from './render';
import state from './redux/state';

rerenderEntireTree(state);

serviceWorker.unregister();
