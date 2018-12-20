# react-dnd-dropzone

> Dropzone with render props built with react-dnd.  
> This is a simple component for the use case of [native files](http://react-dnd.github.io/react-dnd/examples/other/native-files).

[![Travis][build-badge]][build]
[![Codecov Status][codecov-badge]][codecov]
[![npm package][npm-badge]][npm]
[![npm downloads][npm-downloads]][npm]

[![prettier][prettier-badge]][prettier]
[![license][license-badge]][license]

## Installation

```sh
$ yarn add react-dnd-dropzone
```

## Demo

- https://react-dnd-dropzone.netlify.com/

## Usage

```js
import Dropzone from 'react-dnd-dropzone';

<Dropzone
  onDrop={files => console.log(files)}
  render={({ canDrop, isOver }) => (
    <div>
      Drop file here!
      <pre>{JSON.stringify({ canDrop, isOver })}</pre>
    </div>
  )}
/>;
```

## API

```js
type Props = {
  onDrop: (files: Array<File>, monitor: any) => void,
  render: ({ canDrop: boolean, isOver: boolean }) => React.Element<any>,
  accepts?: Array<string>,
};
```

- `accepts` value: https://github.com/react-dnd/react-dnd/blob/master/packages/react-dnd-html5-backend/src/NativeTypes.js

## Development

### Requirements

- node >= 11.5.0
- yarn >= 1.12.3

```sh
$ yarn install --pure-lockfile
$ yarn start
```

## Test

```sh
$ yarn run format
$ yarn run eslint
$ yarn run flow
$ yarn run test:watch
$ yarn run build
```

## Publish

```bash
$ npm version patch
$ npm run changelog
git commit & push
```

---

## CONTRIBUTING

- ⇄ Pull requests and ★ Stars are always welcome.
- For bugs and feature requests, please create an issue.
- Pull requests must be accompanied by passing automated tests.

## [CHANGELOG](CHANGELOG.md)

## [LICENSE](LICENSE)

MIT: [http://michaelhsu.mit-license.org](http://michaelhsu.mit-license.org)

[build-badge]: https://img.shields.io/travis/evenchange4/react-dnd-dropzone/master.svg?style=flat-square
[build]: https://travis-ci.org/evenchange4/react-dnd-dropzone
[npm-badge]: https://img.shields.io/npm/v/react-dnd-dropzone.svg?style=flat-square
[npm]: https://www.npmjs.org/package/react-dnd-dropzone
[codecov-badge]: https://img.shields.io/codecov/c/github/evenchange4/react-dnd-dropzone.svg?style=flat-square
[codecov]: https://codecov.io/github/evenchange4/react-dnd-dropzone?branch=master
[npm-downloads]: https://img.shields.io/npm/dt/react-dnd-dropzone.svg?style=flat-square
[license-badge]: https://img.shields.io/npm/l/react-dnd-dropzone.svg?style=flat-square
[license]: http://michaelhsu.mit-license.org/
[prettier-badge]: https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=flat-square
[prettier]: https://github.com/prettier/prettier
