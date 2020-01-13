import { profileReducer } from './profileReducer';
import { dialogsReducer } from './dialogsReducer';
import { sidebarReducer } from './sidebarReducer';
import state from './state';

const store = {

    getState() {
        return state;
    },

    callSubscriber() {
        console.log('changed');
    },

    subscribe(observer) {
        this.callSubscriber = observer;
    },

    dispatch(action) {
        state.profilePage = profileReducer(state.profilePage, action);
        state.dialogsPage = dialogsReducer(state.dialogsPage, action);
        state.sidebar = sidebarReducer(state.sidebarReducer, action);

        this.callSubscriber(state);
    },
};

export { store };
