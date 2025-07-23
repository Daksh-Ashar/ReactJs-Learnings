if (!Array.prototype.reduce) {
  Array.prototype.reduce = function(callback, initialValue) {
    // Check if 'this' is null or undefined
    if (this === null || this === undefined) {
      throw new TypeError('Array.prototype.reduce called on null or undefined');
    }
    // Check if callback is a function
    if (typeof callback !== 'function') {
      throw new TypeError(callback + ' is not a function');
    }

    // Convert 'this' to an Object (handles array-like objects)
    const array = Object(this);
    // Get length and convert to a positive integer (handles weird lengths)
    const length = array.length >>> 0;
    let accumulator;
    let startIndex = 0;

    // If initialValue is provided (arguments length >= 2)
    if (arguments.length >= 2) {
      accumulator = initialValue;
    } else {
      // No initialValue — find first defined element in the array
      while (startIndex < length && !(startIndex in array)) {
        startIndex++;
      }
      // If no defined element found, throw error
      if (startIndex >= length) {
        throw new TypeError('Reduce of empty array with no initial value');
      }
      // Use first defined element as accumulator and increment startIndex
      accumulator = array[startIndex++];
    }

    // Loop over remaining elements, skipping holes in sparse arrays
    for (let i = startIndex; i < length; i++) {
      if (i in array) {
        // Call callback with accumulator, current value, index, and array
        accumulator = callback(accumulator, array[i], i, array);
      }
    }

    // Return the accumulated result
    return accumulator;
  };
}
