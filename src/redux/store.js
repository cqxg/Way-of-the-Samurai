import { createStore, combineReducers } from 'redux';

import { profileReducer } from './reducers/profileReducer';
import { dialogsReducer } from './reducers/dialogsReducer';
import { sidebarReducer } from './reducers/sidebarReducer';
import { usersReducer } from './reducers/usersReducer';

const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    sidebar: sidebarReducer
});

const store = createStore(reducers);

export default store;
