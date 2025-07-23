// Importing the polyfill
require('../findPolyfill');  // Adjust the path accordingly

describe('Array.prototype.find Polyfill', () => {

  test('should return the first element that satisfies the condition', () => {
    const arr = [5, 12, 8, 130, 44];
    const found = arr.find(element => element > 10);
    
    expect(found).toBe(12);  // First element greater than 10
  });

  test('should return undefined if no element satisfies the condition', () => {
    const arr = [5, 12, 8, 130, 44];
    const found = arr.find(element => element > 200);
    
    expect(found).toBeUndefined();  // No element is greater than 200
  });

  test('should throw an error if the callback is not a function', () => {
    const arr = [1, 2, 3];

    expect(() => {
      arr.find('not a function');  // Should throw an error
    }).toThrow(TypeError);  // Expect a TypeError to be thrown
  });

  test('should throw an error when called on null or undefined', () => {
    expect(() => {
      const arr = null;
      arr.find((item) => {});  // Should throw error when arr is null
    }).toThrow(TypeError);

    expect(() => {
      const arr = undefined;
      arr.find((item) => {});  // Should throw error when arr is undefined
    }).toThrow(TypeError);
  });

  test('should respect the provided thisArg', () => {
    const arr = [5, 12, 8, 130, 44];
    const context = { factor: 12 };
    
    const found = arr.find(function(element) {
      return element === this.factor; // Use 'this' from context
    }, context);
    
    expect(found).toBe(12); // 12 should be the target because of 'factor'
  });

  test('should return undefined for empty array', () => {
    const arr = [];
    const found = arr.find(element => element > 10);
    
    expect(found).toBeUndefined();  // Empty array, so undefined should be returned
  });

  test('should handle arrays with holes (sparse arrays)', () => {
    const arr = [1, , 3]; // Sparse array (missing element at index 1)
    const found = arr.find(element => element === 3);
    
    expect(found).toBe(3);  // Should return 3
  });

});
