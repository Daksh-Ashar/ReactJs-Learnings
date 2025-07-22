if (!Array.prototype.map) {
  Array.prototype.map = function(callback, thisArg) {
    if (this == null) {
      throw new TypeError('Array.prototype.map called on null or undefined');
    }

    if (typeof callback !== 'function') {
      throw new TypeError(callback + ' is not a function');
    }

    const O = Object(this);
    const len = O.length >>> 0;
    const result = new Array(len);

    for (let i = 0; i < len; i++) {
      if (i in O) {
        result[i] = callback.call(thisArg, O[i], i, O);
      }
    }

    return result;
  };
}




// Example:
// const context = {
//   multiplier: 3
// };
// 
// const arr = [1, 2, 3];
// 
// const result = arr.customMap(function(value, index, array) {
//   // Inside here, `this` is `context`
//   return value * this.multiplier;
// }, context);
// 
// console.log(result); // [3, 6, 9]
