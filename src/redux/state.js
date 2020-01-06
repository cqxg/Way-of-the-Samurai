const state = {
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
};

export const addPost = (postMessage) => {
  debugger;
  const newPost = {
    id: 7,
    message: postMessage,
    likesCount: 0,
  };

  state.profilePage.posts.push(newPost);
};


export default state;
