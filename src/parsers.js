import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

export default (filepath) => {
  const format = path.extname(filepath);
  const data = fs.readFileSync(filepath);
  if (format === '' || format === '.json') {
    return JSON.parse(data, 'utf8');
  }
  if (format === '.yml' || format === '.yaml') {
    return yaml.safeLoad(data, 'utf8');
  }
  return JSON.parse(data, 'utf8');
};
