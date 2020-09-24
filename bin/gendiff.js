#!/usr/bin/env node
import program from 'commander';
import gendiff from '../index.js';
import fs from 'fs';
import path from 'path';

program
  .version('-V, --version')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format <type>', 'output format')
  .arguments('<filepath1> <filepath2>')
  .action((file1, file2) => {
    const result = gendiff(file1, file2);
    console.log('gendiff', result);
  });
program.parse(process.argv);
