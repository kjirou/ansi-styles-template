const ansiStyles = require('ansi-styles');
const assert = require('assert');
const {describe, it} = require('mocha');

const {
  replacementMap,
  template,
  validate,
} = require('../../lib/ansi-styles-template');


describe('lib/ansi-styles-template', function() {
  describe('template', function() {
    const {red, underline} = ansiStyles;

    it('can replace an open tag and a close tag', function() {
      const replaced = template('{red}x{/red}');
      assert.strictEqual(replaced, `${red.open}x${red.close}`);
    });

    it('can replace same tags', function() {
      const replaced = template('{/red}x{/red}');
      assert.strictEqual(replaced, `${red.close}x${red.close}`);
    });

    it('can replace different tags', function() {
      const replaced = template('{red}{underline}x{/underline}{/red}');
      assert.strictEqual(replaced, `${red.open}${underline.open}x${underline.close}${red.close}`);
    });

    it('should replace unknown tags to empty strings', function() {
      const replaced = template('{foo}x{/foo}y{bar}z{/bar}');
      assert.strictEqual(replaced, 'xyz');
    });

    it('can change `leftBrace` and `rightBrace`', function() {
      const replaced = template('{red}{{red}}x{/red}{{/red}}', {
        leftBrace: '{{',
        rightBrace: '}}',
      });
      assert.strictEqual(replaced, `{red}${red.open}x{/red}${red.close}`);
    });

    it('can be changed to throw an error if there is an unknown tag', function() {
      assert.throws(() => {
        template('{red}{unknownTag}', {strict: true});
      }, /unknownTag/);
    });
  });

  describe('replacementMap', function() {
    describe('native tags have been converted to at least another string', function() {
      for (const styleName of replacementMap.keys()) {
        [
          `{${styleName}}`,
          `{/${styleName}}`,
        ].forEach(str => {
          it(str, function() {
            const replaced = template(str);
            assert.notStrictEqual(replaced, '');
            assert.notStrictEqual(replaced, str);
          });
        });
      }
    });
  });
});
