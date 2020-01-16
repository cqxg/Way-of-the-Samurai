import { connect } from 'react-redux';

import { updateNewPostTextActionCreator, addPostActionCreator } from '../../../redux/actions/actionCreators';

import MyPosts from './MyPosts';

const mapStateToProps = (state) => ({
  posts: state.profilePage.posts,
  newPostText: state.profilePage.newPostText,
});

const mapDispatchToProps = (dispatch) => ({
  updateNewPostText: (text) => dispatch(updateNewPostTextActionCreator(text)),
  addPost: () => dispatch(addPostActionCreator()),
});


const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
