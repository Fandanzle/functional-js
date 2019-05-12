const compose = (...fns) => payload =>
  fns.reduceRight(
    (accumalator, currentFunction) => currentFunction(accumalator),
    payload
  );

module.exports = {
  compose
} 