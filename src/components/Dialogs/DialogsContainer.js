import { connect } from 'react-redux';
import { compose } from 'redux';

import { updateNewMessageBodyCreator, sendMessageCreator } from '../../redux/actions/actionCreators';

import Dialogs from './Dialogs';

const mapStateToProps = (state) => ({
  dialogsPage: state.dialogsPage,
});

const mapDispatchToProps = (dispatch) => ({
  updateNewMessageBody: (body) => dispatch(updateNewMessageBodyCreator(body)),
  sendMessage: (newMessageBody) => dispatch(sendMessageCreator(newMessageBody)),
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
)(Dialogs);
