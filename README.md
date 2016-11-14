# sandbox-es6

## Installation

```
% git clone git@github.com:DriftwoodJP/sandbox-es6.git your-project && cd $_
% npm install
```


## Usage

`npm run` will list the available scripts.

```
% npm run
Lifecycle scripts included in sandbox-es6:
  start
    parallelshell 'npm run serve' 'npm run development' 'npm run watch'
  test
    mocha test/**/*.test.js

available via `npm run-script`:
  build
    npm run lint && npm run test && npm run production && npm run doc
  development
    BABEL_ENV=development watchify ./src/basic.es6.js --debug --transform babelify --outfile 'exorcist ./lib/basic.js.map > ./lib/basic.js' --verbose
  doc
    esdoc -c .esdoc.json
  lint
    eslint src/ test/
  production
    BABEL_ENV=production browserify ./src/basic.es6.js --debug --transform babelify | exorcist ./lib/basic.js.map > ./lib/basic.js
  serve
    serve -p 3000 .
  watch
    watch 'npm run lint && npm run test' src/ test/
```


### for Development

```
% npm start
```


### for Production

```
% npm build
```
