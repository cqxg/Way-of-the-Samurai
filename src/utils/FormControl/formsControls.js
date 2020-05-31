import React from 'react';
import { Field } from 'redux-form';

import styles from './formsControls.module.css';

const Textarea = ({ input, meta, ...props }) => {
  const hasError = meta.touched && meta.error;

  return (
    <div className={`${styles.formControl} ${hasError ? styles.error : ''}`}>
      <div>
        <textarea {...input} {...props} />
      </div>
      <div>
        {hasError && <span>{meta.error}</span>}
      </div>
    </div>
  );
};

const Input = ({ input, meta, ...props }) => {
  const hasError = meta.touched && meta.error;

  return (
    <div className={`${styles.formControl} ${hasError ? styles.error : ''}`}>
      <div>
        <input {...input} {...props} />
      </div>
      <div>
        {hasError && <span>{meta.error}</span>}
      </div>
    </div>
  );
};

const createField = (placeholder, name, validators, component, props = {}, text = '') => (
  <div>
    <Field
      {...props}
      placeholder={placeholder}
      validators={validators}
      component={component}
      name={name}
    />
    {text}
  </div>
);

export { Textarea, Input, createField };
