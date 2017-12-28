const ansiStyles = require('ansi-styles');
const assert = require('assert');
const {describe, it} = require('mocha');

const {
  template,
  validate,
} = require('../../lib/ansi-styles-template');


describe('lib/ansi-styles-template', function() {
  it('works', function() {
    template();
    validate();
  });
});
