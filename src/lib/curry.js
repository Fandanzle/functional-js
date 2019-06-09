const curry = (func) => (...args) => (
  arg => arg.length === func.length ? func(...arg) : curry(func, arg)
)([...args]);

module.exports = {
  curry
}