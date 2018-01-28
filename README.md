# react-dnd-dropzone

> Dropzone with render props built with react-dnd.  
> This is a simple component for the use case of [native files](http://react-dnd.github.io/react-dnd/examples-other-native-files.html).

[![Travis][build-badge]][build]
[![Codecov Status][codecov-badge]][codecov]
[![npm package][npm-badge]][npm]
[![npm downloads][npm-downloads]][npm]

[![Dependency Status][dependency-badge]][dependency]
[![devDependency Status][devdependency-badge]][devdependency]
[![peerDependency Status][peerdependency-badge]][peerdependency]

[![prettier][prettier-badge]][prettier]
[![license][license-badge]][license]

## Installation

```sh
$ yarn add react-dnd-dropzone
```

## Example

* https://react-dnd-dropzone.netlify.com/

## Usage

### Single file

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
  onDrop: (files: Array<Object>, monitor: any) => void,
  render: ({ canDrop: boolean, isOver: boolean }) => React.Element<any>,
  accepts?: Array<Object>,
};
```

## Development

### Requirements

* node >= 9.4.0
* yarn >= 1.3.2

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

---

## CONTRIBUTING

* ⇄ Pull requests and ★ Stars are always welcome.
* For bugs and feature requests, please create an issue.
* Pull requests must be accompanied by passing automated tests.

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
[dependency-badge]: https://david-dm.org/evenchange4/react-dnd-dropzone.svg?style=flat-square
[dependency]: https://david-dm.org/evenchange4/react-dnd-dropzone
[devdependency-badge]: https://david-dm.org/evenchange4/react-dnd-dropzone/dev-status.svg?style=flat-square
[devdependency]: https://david-dm.org/evenchange4/react-dnd-dropzone#info=devDependencies
[peerdependency-badge]: https://david-dm.org/evenchange4/react-dnd-dropzone/peer-status.svg?style=flat-square
[peerdependency]: https://david-dm.org/evenchange4/react-dnd-dropzone#info=peerDependencies
[prettier-badge]: https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=flat-square
[prettier]: https://github.com/prettier/prettier
