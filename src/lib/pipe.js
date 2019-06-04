const pipe = (...fns) => payload =>
  fns.reduce(
    (accumalator, currentFunction) => currentFunction(accumalator),
    payload
  );

module.exports = {
  pipe
} 