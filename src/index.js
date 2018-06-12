'use strict';

const path = require('path');
const fs = require('fs');

const config = {
  dir: 'apps',
  prefix: '@app:'
};

const exists = (...segments) => fs.existsSync(path.join(...segments));
const isDjangoApp = it => {
  if (!fs.lstatSync(it).isDirectory()) {
    return false;
  }
  return exists(it, 'static') && exists(it, '__init__.py');
}

const djangoAppsAlias = (options = {}) => {
  const { dir, prefix } = Object.assign(config, options);
  if (!exists(dir)) return {};

  return fs.readdirSync(dir).reduce((acc, name) => {
    const appFullPath = path.join(dir, name);
    if (!isDjangoApp(appFullPath)) return acc;

    const appName = `${prefix}${name}`;
    const appPath = `${appFullPath}/static/${name}/js/`;
    return Object.assign(acc, { [appName]: appPath });
  }, {});
};

module.exports = djangoAppsAlias;
