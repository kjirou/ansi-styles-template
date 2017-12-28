const ansiStyles = require('ansi-styles');


/**
 * @author https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
 */
const escapeRegExp = (string) => {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
};

const replacementMap = [
  // Modifiers
  'reset',
  'bold',
  'dim',
  'italic',
  'underline',
  'inverse',
  'hidden',
  'strikethrough',

  // Colors
  'black',
  'red',
  'green',
  'yellow',
  'blue',
  'magenta',
  'cyan',
  'white',
  'gray',
  'redBright',
  'greenBright',
  'yellowBright',
  'blueBright',
  'magentaBright',
  'cyanBright',
  'whiteBright',

  // Background colors
  'bgBlack',
  'bgRed',
  'bgGreen',
  'bgYellow',
  'bgBlue',
  'bgMagenta',
  'bgCyan',
  'bgWhite',
  'bgBlackBright',
  'bgRedBright',
  'bgGreenBright',
  'bgYellowBright',
  'bgBlueBright',
  'bgMagentaBright',
  'bgCyanBright',
  'bgWhiteBright',
].reduce((map, styleName) => {
  map.set(styleName, {
    opener: ansiStyles[styleName].open,
    closer: ansiStyles[styleName].close,
  });
  return map;
}, new Map());

/**
 * @param {string} str
 * @param {(Object|undefined)} options_
 * @param {string} [options_.leftBrace]
 * @param {string} [options_.rightBrace]
 * @param {boolean} [options_.strict]
 * @return {string}
 */
const template = (str, options_ = {}) => {
  const options = Object.assign({
    leftBrace: '{',
    rightBrace: '}',
    strict: false,
  }, options_);

  const tagMatcher = new RegExp(
    `${escapeRegExp(options.leftBrace)}(/?)([a-z\d]+)${escapeRegExp(options.rightBrace)}`,
    'gi'
  );

  return str.replace(tagMatcher, (__, closerTagPrefix, styleName) => {
    const style = replacementMap.get(styleName);
    if (style === undefined) {
      if (options.strict) {
        throw new Error(`"${styleName}" is unknown ANSI style name`);
      } else {
        return '';
      }
    }
    return closerTagPrefix === '' ? style.opener : style.closer;
  });
};

// TODO:
const validate = () => {
};

module.exports = {
  replacementMap,
  template,
  validate,
};
