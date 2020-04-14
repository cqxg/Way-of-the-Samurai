const required = value => {
    if (value) return undefined;
    return 'Field is required';
};

const maxLength30 = value => {
    if (value.length > 30) return 'Max length is 30 symbols';
    return undefined;
};

export { required };