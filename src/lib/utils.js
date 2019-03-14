export const debugLog = (...args) => {
  if (process.env.NODE_ENV !== 'production') {
    const curr = new Date().toLocaleString();
    return console.log(curr + ' [ReactSlackChat]', ...args);
  }
};

export const arraysIdentical = (a, b) => {
  return JSON.stringify(a) === JSON.stringify(b);
};
