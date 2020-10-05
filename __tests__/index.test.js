/* eslint-disable no-underscore-dangle */
import { test, expect } from '@jest/globals';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import gendiff from '../index.js';

test.each([['json'], ['yaml'], ['ini']])('comparing %s files', (ext) => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const result = gendiff(path.join(__dirname, '..', '__fixtures__', `file1.${ext}`), path.join(__dirname, '..', '__fixtures__', `file2.${ext}`));
  const rightAnswer = fs.readFileSync(path.join(__dirname, '..', '__fixtures__', 'file1file2.txt'), 'utf8');
  expect(result).toBe(rightAnswer);
});
