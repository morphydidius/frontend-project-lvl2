import _ from 'lodash';
import parse from './src/parsers.js';

export default (filepath1, filepath2) => {
  const file1 = parse(filepath1);
  const file2 = parse(filepath2);
  // console.log('file1', file1);
  // console.log('file2', file2);
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
