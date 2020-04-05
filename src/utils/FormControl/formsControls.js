import React from 'react';

import styles from './formsControls.module.css';

const Textarea = ({input, meta, ...props}) => {
    return (
        <div className={styles.formControl + ' ' + styles.error}>
            <textarea {...input} {...props} />
        </div>
    )
};

export { Textarea };