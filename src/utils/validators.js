const required = value => {
    if (value) return undefined;
    return 'Field is required';
};


export { required };