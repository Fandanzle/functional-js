const flip = (func) => 
  (...args) => 
    func(
       ...Array.from(args).reverse()
    );

module.exports = {
  flip
} 