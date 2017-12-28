const {template} = require('../index');

const str = '{red}Bloody..{/red}';

console.log(template(str));  // -> "\u001b[31mBloody..\u001b[39m"
