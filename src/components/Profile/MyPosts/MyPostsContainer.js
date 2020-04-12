import { connect } from 'react-redux';

import { addPostActionCreator } from '../../../redux/actions/actionCreators';

import MyPosts from './MyPosts';

const mapStateToProps = (state) => ({
  posts: state.profilePage.posts,
  newPostText: state.profilePage.newPostText,
});

const mapDispatchToProps = (dispatch) => ({
  addPost: (newPostText) => dispatch(addPostActionCreator(newPostText)),
});

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
