
// Assuming you have already included the polyfill
// You can add the polyfill in a separate file, or just paste it here for testing

require('../forEachPolyfill.js');

describe('Array.prototype.forEach Polyfill', () => {

  test('should iterate over an array and execute the callback', () => {
    const arr = [1, 2, 3, 4];
    let result = [];

    arr.forEach((item) => {
      result.push(item * 2); // Multiply each item by 2
    });

    expect(result).toEqual([2, 4, 6, 8]);
  });

  test('should handle an empty array correctly', () => {
    const emptyArr = [];
    let result = [];

    emptyArr.forEach((item) => {
      result.push(item); // This should not run, as the array is empty
    });

    expect(result).toEqual([]);
  });

  test('should throw error if callback is not a function', () => {
  const arr = [1, 2, 3];

  // Use toThrow without "Error" part.
  expect(() => {
    arr.forEach('not a function');  // Should throw an error
  }).toThrow(TypeError);  // Corrected to expect the TypeError
});

test('should throw error when called on null or undefined', () => {
  expect(() => {
    const arr = null;
    arr.forEach((item) => {});  // Should throw error when arr is null
  }).toThrow(TypeError);

  expect(() => {
    const arr = undefined;
    arr.forEach((item) => {});  // Should throw error when arr is undefined
  }).toThrow(TypeError);
});

  test('should accept thisArg and pass it correctly to callback', () => {
    const arr = [1, 2, 3];
    const context = { factor: 10 };
    let result = [];

    arr.forEach(function(item) {
      result.push(item * this.factor);  // Using 'this' from context
    }, context);

    expect(result).toEqual([10, 20, 30]);
  });

  test('should not execute callback for missing array elements', () => {
    const arr = [1, , 3];  // Array with a "hole" (empty element at index 1)
    let result = [];

    arr.forEach((item) => {
      result.push(item); // Should only push non-empty elements
    });

    expect(result).toEqual([1, 3]);  // No `undefined` should be added
  });

});

