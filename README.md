# Django Apps Webpack Alias
[![Open Source Love](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://github.com/ellerbrock/open-source-badges/)
[![license](https://img.shields.io/github/license/marinko-peso/django-apps-webpack-alias.svg)](https://github.com/marinko-peso/django-apps-webpack-alias/blob/master/LICENSE)
[![js-semistandard-style](https://img.shields.io/badge/code%20style-semistandard-brightgreen.svg)](https://github.com/Flet/semistandard)
[![package version](https://img.shields.io/npm/v/django-apps-webpack-alias.svg)](https://npm.im/django-apps-webpack-alias)
[![install size](https://packagephobia.now.sh/badge?p=django-apps-webpack-alias)](https://packagephobia.now.sh/result?p=django-apps-webpack-alias)
[![dependecies](https://david-dm.org/marinko-peso/django-apps-webpack-alias.svg)](https://david-dm.org/marinko-peso/django-apps-webpack-alias)

Automatically discovery django apps folder and create webpack alias for them with the app name.


## Why?

If you need to start using Webpack on a Django organized project it can be a pain. Static files are usually organized per django app, and communication between them using relative paths can soon become messy.
This way you can generate Webpack alias for all Django apps automatically and let Webpack handle the messy part for you.


## Install

```ssh
npm i -D django-apps-webpack-alias
```


## Running

```js
const djangoAppsAlias = require('django-apps-webpack-alias');

// in webpack alias config just spread it (or Object.assign with other alias entries)
alias: {
    ...djangoAppsAlias({ options })
},
```

Available options:
- dir [default 'apps'] path to directory holding the apps
- prefix [default '@app:'] each app alias prefix, for instance for auth app it will generate ``` @app:auth ```

All aliases point to app/static/app/js directory.


## License

MIT.
