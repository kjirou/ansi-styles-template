# ansi-styles-template

[![npm version](https://badge.fury.io/js/ansi-styles-template.svg)](https://badge.fury.io/js/ansi-styles-template)
[![Build Status](https://travis-ci.org/kjirou/ansi-styles-template.svg?branch=master)](https://travis-ci.org/kjirou/ansi-styles-template)

Use ANSI styles in template notation


## Installation

```bash
npm install ansi-styles-template
```


## Usage
### Basic usage

```js
const {template} = require('ansi-styles-template');

const str = '{red}Bloody..{/red}';

console.log(template(str));  // -> "\u001b[31mBloody..\u001b[39m"
```

### Built-in styles

The styles available as tags conform to [ansy-styles](https://github.com/chalk/ansi-styles).

Or dump `replacementMap` in the following way, you can confirm more certainly.

```js
const {replacementMap} = require('ansi-styles-template');

console.log(replacementMap);
// ->
//   Map {
//     'reset' => { opener: '\u001b[0m', closer: '\u001b[0m' },
//     'bold' => { opener: '\u001b[1m', closer: '\u001b[22m' },
//     'dim' => { opener: '\u001b[2m', closer: '\u001b[22m' },
//     'italic' => { opener: '\u001b[3m', closer: '\u001b[23m' },
//     'underline' => { opener: '\u001b[4m', closer: '\u001b[24m' },
//     'inverse' => { opener: '\u001b[7m', closer: '\u001b[27m' },
//     'hidden' => { opener: '\u001b[8m', closer: '\u001b[28m' },
//     'strikethrough' => { opener: '\u001b[9m', closer: '\u001b[29m' },
//     'black' => { opener: '\u001b[30m', closer: '\u001b[39m' },
//     'red' => { opener: '\u001b[31m', closer: '\u001b[39m' },
//     'green' => { opener: '\u001b[32m', closer: '\u001b[39m' },
//     'yellow' => { opener: '\u001b[33m', closer: '\u001b[39m' },
//     'blue' => { opener: '\u001b[34m', closer: '\u001b[39m' },
//     'magenta' => { opener: '\u001b[35m', closer: '\u001b[39m' },
//     'cyan' => { opener: '\u001b[36m', closer: '\u001b[39m' },
//     'white' => { opener: '\u001b[37m', closer: '\u001b[39m' },
//     'gray' => { opener: '\u001b[90m', closer: '\u001b[39m' },
//     'redBright' => { opener: '\u001b[91m', closer: '\u001b[39m' },
//     'greenBright' => { opener: '\u001b[92m', closer: '\u001b[39m' },
//     'yellowBright' => { opener: '\u001b[93m', closer: '\u001b[39m' },
//     'blueBright' => { opener: '\u001b[94m', closer: '\u001b[39m' },
//     'magentaBright' => { opener: '\u001b[95m', closer: '\u001b[39m' },
//     'cyanBright' => { opener: '\u001b[96m', closer: '\u001b[39m' },
//     'whiteBright' => { opener: '\u001b[97m', closer: '\u001b[39m' },
//     'bgBlack' => { opener: '\u001b[40m', closer: '\u001b[49m' },
//     'bgRed' => { opener: '\u001b[41m', closer: '\u001b[49m' },
//     'bgGreen' => { opener: '\u001b[42m', closer: '\u001b[49m' },
//     'bgYellow' => { opener: '\u001b[43m', closer: '\u001b[49m' },
//     'bgBlue' => { opener: '\u001b[44m', closer: '\u001b[49m' },
//     'bgMagenta' => { opener: '\u001b[45m', closer: '\u001b[49m' },
//     'bgCyan' => { opener: '\u001b[46m', closer: '\u001b[49m' },
//     'bgWhite' => { opener: '\u001b[47m', closer: '\u001b[49m' },
//     'bgBlackBright' => { opener: '\u001b[100m', closer: '\u001b[49m' },
//     'bgRedBright' => { opener: '\u001b[101m', closer: '\u001b[49m' },
//     'bgGreenBright' => { opener: '\u001b[102m', closer: '\u001b[49m' },
//     'bgYellowBright' => { opener: '\u001b[103m', closer: '\u001b[49m' },
//     'bgBlueBright' => { opener: '\u001b[104m', closer: '\u001b[49m' },
//     'bgMagentaBright' => { opener: '\u001b[105m', closer: '\u001b[49m' },
//     'bgCyanBright' => { opener: '\u001b[106m', closer: '\u001b[49m' },
//     'bgWhiteBright' => { opener: '\u001b[107m', closer: '\u001b[49m' } }
```


## API
### template(str, options = {})
#### Arguments

- `str: string`
  - A string to be replaced
- `options.leftBrace: string`
  - Default: `"{"`
- `options.rightBrace: string`
  - Default: `"}"`
- `options.strict: boolean`
  - Default: `false`
  - Whether to throw an error if an unknown tag matches
