const required = (value) => {
  if (value) return undefined;
  return 'Field is required';
};

const maxLengthCreator = (maxLength) => (value) => {
  if (value.length > maxLength) return `Max length is ${maxLength} symbols`;
  return undefined;
};

export { required, maxLengthCreator };
