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

module.exports.LOCATIONS = 'L';

module.exports.VERBS = 'V';
module.exports.VERBS_TARGETTABLE = 'VT';

const wrapped = {};

Object.keys(module.exports).forEach(key => wrapped[key] = StringGenerator.wrapSymbol(module.exports[key]));

module.exports.wrapped = wrapped;