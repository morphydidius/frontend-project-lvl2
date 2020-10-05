import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';
import ini from 'ini';

export default (filepath) => {
  const format = path.extname(filepath);
  const data = fs.readFileSync(filepath);
  if (format === '' || format === '.json') {
    return JSON.parse(data, 'utf8');
  }
  if (format === '.yml' || format === '.yaml') {
    return yaml.safeLoad(data, 'utf8');
  }
  if (format === '.ini') {
    return ini.parse(data.toString(), 'utf8');
  }
  return JSON.parse(data, 'utf8');
};
