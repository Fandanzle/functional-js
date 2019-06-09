const compose = (...funcs) => payload =>
  funcs.reduceRight(
    (accumalator, currentFunc) => currentFunc(accumalator),
    payload
  );

module.exports = {
  compose
} 