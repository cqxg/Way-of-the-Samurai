import React from 'react';

import styles from './formsControls.module.css';

const Textarea = ({ input, meta, ...props }) => {
    const hasError = meta.touched && meta.error;

    return (
        <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
            <div>
                <textarea {...input} {...props} />
            </div>
            <div>
                {hasError && <span>{meta.error}</span>}
            </div>
        </div >
    )
};

export { Textarea };