describe('Array.prototype.reduce polyfill - comprehensive tests', () => {
  beforeAll(() => {
    if (!Array.prototype.reduce) {
      require('./your-polyfill-file'); // adjust path if needed
    }
  });

  test('reduces with initial value correctly', () => {
    expect([1, 2, 3].reduce((acc, val) => acc + val, 5)).toBe(11);
  });

  test('reduces without initial value correctly', () => {
    expect([1, 2, 3].reduce((acc, val) => acc + val)).toBe(6);
  });

  test('handles sparse arrays correctly', () => {
    const arr = [, , 3, 4]; // holes at index 0 and 1
    expect(arr.reduce((acc, val) => acc + val)).toBe(7);
  });

  test('throws TypeError on empty array without initial value', () => {
    expect(() => [].reduce((acc, val) => acc + val)).toThrow(TypeError);
  });

  test('works with array-like objects', () => {
    const arrayLike = {
      0: 'a',
      1: 'b',
      length: 2
    };
    const result = Array.prototype.reduce.call(arrayLike, (acc, val) => acc + val, '');
    expect(result).toBe('ab');
  });

  test('throws TypeError if callback is not a function', () => {
    expect(() => [1, 2].reduce(null)).toThrow(TypeError);
    expect(() => [1, 2].reduce(undefined)).toThrow(TypeError);
  });

  test('throws TypeError if called on null or undefined', () => {
    expect(() => Array.prototype.reduce.call(null, () => {})).toThrow(TypeError);
    expect(() => Array.prototype.reduce.call(undefined, () => {})).toThrow(TypeError);
  });

  test('callback is called with correct arguments', () => {
    const arr = [10, 20, 30];
    const calls = [];
    arr.reduce((acc, val, idx, array) => {
      calls.push({ acc, val, idx, array });
      return acc + val;
    }, 0);
    expect(calls).toEqual([
      { acc: 0, val: 10, idx: 0, array: arr },
      { acc: 10, val: 20, idx: 1, array: arr },
      { acc: 30, val: 30, idx: 2, array: arr }
    ]);
  });

  test('handles single-element arrays without initialValue', () => {
    const arr = [42];
    expect(arr.reduce((acc, val) => acc + val)).toBe(42);
  });

  test('handles single-element arrays with initialValue', () => {
    const arr = [42];
    expect(arr.reduce((acc, val) => acc + val, 10)).toBe(52);
  });

  test('does not mutate original array', () => {
    const arr = [1, 2, 3];
    const copy = [...arr];
    arr.reduce((acc, val) => acc + val, 0);
    expect(arr).toEqual(copy);
  });
});
