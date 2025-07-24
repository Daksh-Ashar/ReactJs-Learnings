// __tests__/somePolyfill.test.js

require('../somePolyfill.js'); // Import the polyfill from one level above

describe('Array.prototype.some Polyfill', () => {
  test('returns true if at least one element satisfies the condition', () => {
    const arr = [1, 2, 3, 4];
    const result = arr.some(num => num > 2);
    expect(result).toBe(true);
  });

  test('returns false if no element satisfies the condition', () => {
    const arr = [1, 2, 3];
    const result = arr.some(num => num > 5);
    expect(result).toBe(false);
  });

  test('uses thisArg correctly', () => {
    const arr = ['apple', 'banana', 'grape'];
    const context = { match: 'banana' };

    const result = arr.some(function (fruit) {
      return fruit === this.match;
    }, context);

    expect(result).toBe(true);
  });

  test('throws TypeError if callback is not a function', () => {
    const arr = [1, 2, 3];
    expect(() => arr.some(null)).toThrow(TypeError);
  });

  test('skips empty slots in sparse arrays', () => {
    const arr = [1, , 3]; // index 1 is a hole
    let count = 0;

    arr.some(() => {
      count++;
      return false;
    });

    expect(count).toBe(2); // only index 0 and 2 are visited
  });
});
