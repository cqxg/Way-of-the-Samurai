const store = {
  getState() {
    return this._state;
  },

  _state: {
    profilePage: {
      posts: [
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
      ],

      newPostText: '',
    },

    dialogsPage: {
      dialogs: [
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
      ],

      messages: [
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
      ],
    },
  },

  _callSubscriber() {
    console.log('changed');
  },

  addPost() {
    debugger;
    const newPost = {
      id: 7,
      message: this._state.profilePage.newPostText,
      likesCount: 0,
    };

    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = '';
    this._callSubscriber(this._state);
  },

  updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },
};

export default store;
