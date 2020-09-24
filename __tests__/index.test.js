import { test, expect } from '@jest/globals';
import gendiff from '../index.js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// const str = '{
//     host: hexlet.io
//   - timeout: 50
//   + timeout: 20
//   - proxy: 123.234.53.22
//   - follow: false
//   + verbose: true
// }';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const result = gendiff(path.join(__dirname, '..', '__fixtures__', 'file1.json'), path.join(__dirname, '..', '__fixtures__', 'file2.json'));

console.log('result', result, typeof result);

const answer = fs.readFileSync(path.join(__dirname, '..', '__fixtures__', 'file1file2.txt'), 'utf8');
console.log('answer', answer, typeof answer);

test('compare', () => {
  expect(result).toBe(answer);
});
