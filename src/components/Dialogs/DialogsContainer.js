import { connect } from 'react-redux';

import { updateNewMessageBodyCreator, sendMessageCreator } from '../../store/actions/actionCreators';

import Dialogs from './Dialogs';

const mapStateToProps = (state) => ({
  dialogsPage: state.dialogsPage,
});

const mapDispatchToProps = (dispatch) => ({
  sendMessage: (body) => dispatch(updateNewMessageBodyCreator(body)),
  updateNewMessageBody: () => dispatch(sendMessageCreator()),
});

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
