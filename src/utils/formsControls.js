import React from 'react';

const Textarea = ({input, meta, ...props}) => {
    return (
        <div>
            <textarea {...input} {...props} />
        </div>
    )
};

export { Textarea };