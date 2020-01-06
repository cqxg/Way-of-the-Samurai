import React from 'react';

import DialogItem from './DialogsItem/DialogsItem';
import Message from './Message/Message';

import style from './Dialogs.module.css';

const Dialogs = (props) => {
  const dialogsElements = props.state.dialogs.map((d) => <DialogItem name={d.name} id={d.id} />);
  const messagesElements = props.state.messages.map((m) => <Message message={m.message} />);
  const newDialogText = React.createRef();

  const showDialogText = () => {
    const text = newDialogText.current.value;
    alert(text);
  };

  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={style.messages}>
        {messagesElements}
      </div>
      <div>
        <textarea ref={newDialogText} />
        <button onClick={showDialogText} />
      </div>
    </div>
  );
};

export default Dialogs;
