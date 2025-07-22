require('../filterPolyfill'); // if your polyfill is in a separate file

describe('Array.prototype.filter (polyfill)', () => {
  test('filters elements based on condition', () => {
    const result = [1, 2, 3, 4].filter(n => n % 2 === 0);
    expect(result).toEqual([2, 4]);
  });

  test('filters elements using thisArg', () => {
    const context = { threshold: 3 };
    const arr = [1, 2, 3, 4, 5];
    const result = arr.filter(function(n) {
      return n > this.threshold;
    }, context);
    expect(result).toEqual([4, 5]);
  });

  test('returns empty array if no elements match', () => {
    const result = [1, 2, 3].filter(n => n > 10);
    expect(result).toEqual([]);
  });

  test('works with sparse arrays (skips holes)', () => {
    const arr = [1, , 3]; // hole at index 1
    const result = arr.filter(() => true);
    expect(result).toEqual([1, 3]);
    expect(1 in result).toBe(true); // ensures hole is removed
  });

  test('throws if callback is not a function', () => {
    expect(() => {
      [1, 2, 3].filter(null);
    }).toThrow(TypeError);
  });

  test('works on array-like objects', () => {
    const obj = { 0: 'a', 1: 'b', 2: 'c', length: 3 };
    const result = Array.prototype.filter.call(obj, letter => letter !== 'b');
    expect(result).toEqual(['a', 'c']);
  });
});
