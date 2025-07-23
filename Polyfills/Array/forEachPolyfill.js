if (!Array.prototype.forEach) {
  Array.prototype.forEach = function(callback, thisArg) {
    // Ensure `this` refers to the array-like object
    if (this == null) {
      throw new TypeError('Cannot read property "forEach" of null or undefined');
    }

    // Convert `this` to an array-like object
    var O = Object(this);
    var len = O.length >>> 0; // Convert length to a non-negative integer

    // Ensure callback is a function
    if (typeof callback !== 'function') {
      throw new TypeError(callback + ' is not a function');
    }

    // Iterate over array-like objects
    for (var i = 0; i < len; i++) {
      if (i in O) {
        callback.call(thisArg, O[i], i, O);
      }
    }
  };
}
