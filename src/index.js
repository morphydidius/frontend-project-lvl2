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
      console.log('{');
      keys.forEach((key) => {
        if (!_.has(file1, key)) {
          console.log(`  + ${key}: ${file2[key]}`);
        } else if (!_.has(file2, key)) {
          console.log(`  - ${key}: ${file1[key]}`);
        } else if (file1[key] === file2[key]) {
          console.log(`    ${key}: ${file1[key]}`);
        } else {
          console.log(`  - ${key}: ${file1[key]}`);
          console.log(`  + ${key}: ${file2[key]}`);
        }
      });
      console.log('}');
    });
  program.parse(process.argv);
};
