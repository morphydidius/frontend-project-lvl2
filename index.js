import program from 'commander';
import fs from 'fs';
import path from 'path';
import _ from 'lodash';

export default (filepath1, filepath2) => {
  const file1 = JSON.parse(fs.readFileSync(path.resolve(filepath1), 'utf8'));
  const file2 = JSON.parse(fs.readFileSync(path.resolve(filepath2), 'utf8'));
  const keys = [...Object.keys(file1)];
  Object.keys(file2).forEach((key) => {
    if (!_.has(file1, key)) {
      keys.push(key);
    }
  });
  const diff = keys.reduce((acc, key) => {
    if (!_.has(file1, key)) {
      return `${acc}\n  + ${key}: ${file2[key]}`;
    }
    if (!_.has(file2, key)) {
      return `${acc}\n  - ${key}: ${file1[key]}`;
    }
    if (file1[key] === file2[key]) {
      return `${acc}\n    ${key}: ${file1[key]}`;
    }
    return `${acc}\n  - ${key}: ${file1[key]}\n  + ${key}: ${file2[key]}`;
  }, '');
  const result = `{${diff}\n}\n`;
  return result;
};
