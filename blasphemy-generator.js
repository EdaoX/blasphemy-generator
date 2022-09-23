const StringGenerator = require('./core/string-generator');
const tokens = require('./data/tokens');

const generator = new StringGenerator();
generator.addSet(tokens.MALE_DIVINITIES, require('./data/divinities').male);
generator.addSet(tokens.FEMALE_DIVINITIES, require('./data/divinities').female);
generator.addSet(tokens.FEMALE_NO_MADONNA_DIVINITIES, require('./data/divinities').femaleNoMadonna);

generator.addSet(tokens.MALE_ADJECTIVES, require('./data/adjectives').male);
generator.addSet(tokens.FEMALE_ADJECTIVES, require('./data/adjectives').female);

generator.addSet(tokens.MALE_ANIMALS, require('./data/animals').male);
generator.addSet(tokens.FEMALE_ANIMALS, require('./data/animals').female);
generator.addSet(tokens.MALE_ANIMALS_PLURAL, require('./data/animals').malePlural);
generator.addSet(tokens.FEMALE_ANIMALS_PLURAL, require('./data/animals').femalePlural);

generator.addSet(tokens.MALE_ITEMS, require('./data/items').male);
generator.addSet(tokens.FEMALE_ITEMS, require('./data/items').female);
generator.addSet(tokens.MALE_ITEMS_PLURAL, require('./data/items').malePlural);
generator.addSet(tokens.FEMALE_ITEMS_PLURAL, require('./data/items').femalePlural);

generator.addSet(tokens.BODY_LOCATIONS, require('./data/body-locations'));

generator.addSet(tokens.VERBS, require('./data/verbs').any);
generator.addSet(tokens.VERBS_TARGETTABLE, require('./data/verbs').targettable);

generator.addFormats(require('./data/formats'));

module.exports = generator;