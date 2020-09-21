import compare from '../src/index.js';

test('compare', () => {
  expect(compare('../src/file1.json', '../src/file2.json')).toBe(3);
});
