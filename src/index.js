import program from 'commander';
import fs from 'fs';
import path from 'path';
import _ from 'lodash';

export default () => {
  program
    .version('-V, --version')
    .description('Compares two configuration files and shows a difference.')
    .option('-f, --format <type>', 'output format')
    .action((env, options) => {
      const file1 = JSON.parse(fs.readFileSync(path.resolve(options[0]), 'utf8'));
      const file2 = JSON.parse(fs.readFileSync(path.resolve(options[1]), 'utf8'));
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
      const result = `{${diff}\n}`;
      console.log(result);
      return result;
    });
  program.parse(process.argv);
};
