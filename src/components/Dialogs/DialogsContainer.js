import { connect } from 'react-redux';

import { updateNewMessageBodyCreator, sendMessageCreator } from '../../redux/actions/actionCreators';
import { withAuhRedirect } from '../../hoc/withAuthRedirect';

import Dialogs from './Dialogs';

const mapStateToProps = (state) => ({
  dialogsPage: state.dialogsPage,
  isAuth: state.auth.isAuth,
});

const mapDispatchToProps = (dispatch) => ({
  updateNewMessageBody: (body) => dispatch(updateNewMessageBodyCreator(body)),
  sendMessage: () => dispatch(sendMessageCreator()),
});

const AuthRedirectComponent =  withAuhRedirect(Dialogs);

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default DialogsContainer;
