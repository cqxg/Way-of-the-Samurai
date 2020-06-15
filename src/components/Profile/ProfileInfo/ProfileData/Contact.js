import React from 'react';

import style from './Contact.module.css';

const Contact = (props) => {
  const { contactTitle, contactValue } = props;
  return (
    <div className={style.contact}>
      <b>
        {`${contactTitle} :`}
      </b>
      {contactValue}
    </div>
  );
};

export default Contact;
