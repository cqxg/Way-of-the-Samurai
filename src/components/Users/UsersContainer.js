import { connect } from 'react-redux';

import Users from './Users';
import { followActionCreator, unfollowActionCreator, setUsersActionCreator } from '../../redux/reducers/usersReducer';

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userID) => {
            dispatch(followActionCreator(userID));
        },
        unfollow: (userID) => {
            dispatch(unfollowActionCreator(userID));
        },
        setUsers: (users) => {
            dispatch(setUsersActionCreator(users));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);