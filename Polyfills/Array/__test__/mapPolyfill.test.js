require('../mapPolyfill'); // Your polyfill file

test('maps over an array and doubles the values', () => {
  const result = [1, 2, 3].map(x => x * 2);
  expect(result).toEqual([2, 4, 6]);
});

test('skips holes in sparse arrays', () => {
  const arr = [1, , 3]; // hole at index 1
  const result = arr.map(x => x ?? 'empty');

  expect(result.length).toBe(3);
  expect(result[0]).toBe(1);
  expect(1 in result).toBe(false); // hole remains a hole
  expect(result[2]).toBe(3);
});

test('works on array-like object', () => {
  const obj = { 0: 'a', 1: 'b', length: 2 };
  const result = Array.prototype.map.call(obj, x => x.toUpperCase());
  expect(result).toEqual(['A', 'B']);
});
