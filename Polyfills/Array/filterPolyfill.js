if (!Array.prototype.filter) {
  Array.prototype.filter = function(callback, thisArg) {
    if (this == null) {
      throw new TypeError('Array.prototype.filter called on null or undefined');
    }

    if (typeof callback !== 'function') {
      throw new TypeError(callback + ' is not a function');
    }

    var result = [];
    var array = Object(this);
    var len = array.length >>> 0;

    for (var i = 0; i < len; i++) {
      if (i in array) {
        var value = array[i];
        if (callback.call(thisArg, value, i, array)) {
          result.push(value);
        }
      }
    }

    return result;
  };
}
