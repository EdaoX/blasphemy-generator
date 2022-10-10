const StringGenerator = require('../core/string-generator');

module.exports.MALE_DIVINITIES = 'MD';
module.exports.FEMALE_DIVINITIES = 'FD';
module.exports.FEMALE_NO_MADONNA_DIVINITIES = 'FN';

module.exports.MALE_ADJECTIVES = 'MA';
module.exports.FEMALE_ADJECTIVES = 'FA';

module.exports.MALE_ANIMALS = 'MAN';
module.exports.FEMALE_ANIMALS = 'FAN';
module.exports.MALE_ANIMALS_PLURAL = 'MANP';
module.exports.FEMALE_ANIMALS_PLURAL = 'FANP';

module.exports.MALE_ITEMS = 'MI';
module.exports.FEMALE_ITEMS = 'FI';
module.exports.MALE_ITEMS_PLURAL = 'MIP';
module.exports.FEMALE_ITEMS_PLURAL = 'FIP';

module.exports.BODY_LOCATIONS = 'BL';

module.exports.VERBS = 'V';
module.exports.VERBS_TARGETTABLE = 'VT';

module.exports.MALE_JOBS = 'MJ';
module.exports.FEMALE_JOBS = 'FJ';

module.exports.LOCATIONS = 'L';

module.exports.wrap = StringGenerator.wrapSymbol;
module.exports.optional = token => `?${token}`;
module.exports.choose = (...tokens) => `${tokens.join('|')}`;