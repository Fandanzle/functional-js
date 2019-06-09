const pipe = (...funcs) => payload =>
  funcs.reduce(
    (accumalator, currentFunction) => currentFunction(accumalator),
    payload
  );

module.exports = {
  pipe
} 