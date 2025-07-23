// Polyfill for Array.prototype.find
if (!Array.prototype.find) {
  Array.prototype.find = function(callback, thisArg) {
    if (this == null) {
      throw new TypeError('Cannot read property "find" of null or undefined');
    }

    if (typeof callback !== 'function') {
      throw new TypeError(callback + ' is not a function');
    }

    var O = Object(this);
    var len = O.length >>> 0; // Convert length to a non-negative integer

    for (var i = 0; i < len; i++) {
      if (i in O) {
        var element = O[i];
        if (callback.call(thisArg, element, i, O)) {  // Ensure the callback gets the correct 'this'
          return element;
        }
      }
    }

    return undefined; // Return undefined if no element was found
  };
}
