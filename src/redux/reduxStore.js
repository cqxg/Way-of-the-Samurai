import { createStore, combineReducers } from 'redux';

import { profileReducer } from '../store/profileReducer';
import { dialogsReducer } from '../store/dialogsReducer';
import { sidebarReducer } from '../store/sidebarReducer';

const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
});

const store = createStore(reducers);

export default store;
