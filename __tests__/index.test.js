/* eslint-disable no-underscore-dangle */
import { test, expect } from '@jest/globals';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import gendiff from '../index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const result = gendiff(path.join(__dirname, '..', '__fixtures__', 'file1.json'), path.join(__dirname, '..', '__fixtures__', 'file2.json'));
const answer = fs.readFileSync(path.join(__dirname, '..', '__fixtures__', 'file1file2.txt'), 'utf8');


test('compare', () => {
  expect(result).toBe(answer);
});
