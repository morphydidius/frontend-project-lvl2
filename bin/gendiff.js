#!/usr/bin/env node
import program from 'commander';

program
  .version('-V, --version')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format <type>', 'output format');

program.parse(process.argv);
