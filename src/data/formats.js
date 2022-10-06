const t = require('./tokens');
const w = t.wrap;
const o = t.optional;
const c = (...tokens) => w(t.choose(...tokens));

const composedMaleDivinity = `${w(t.MALE_DIVINITIES)} ${c(t.MALE_ADJECTIVES, t.MALE_ANIMALS, t.MALE_ITEMS, t.MALE_JOBS)} ${o(t.MALE_ADJECTIVES)}`;
const composedFemaleDivinity = `${w(t.FEMALE_DIVINITIES)} ${c(t.FEMALE_ADJECTIVES, t.FEMALE_ANIMALS, t.FEMALE_ITEMS, t.FEMALE_JOBS)} ${o(t.FEMALE_ADJECTIVES)}`

module.exports = [
    `${c(t.MALE_ANIMALS, t.FEMALE_ANIMALS, t.MALE_ITEMS, t.FEMALE_ITEMS)} di ${c(t.MALE_DIVINITIES)} ${o(t.MALE_JOBS)} ${o(t.MALE_ADJECTIVES)}`,
    `${c(t.MALE_ANIMALS, t.FEMALE_ANIMALS, t.MALE_ITEMS, t.FEMALE_ITEMS)} di ${c(t.FEMALE_NO_MADONNA_DIVINITIES)} ${o(t.FEMALE_JOBS)} ${o(t.FEMALE_ADJECTIVES)}`,
    `${c(t.MALE_ANIMALS, t.FEMALE_ANIMALS, t.MALE_ITEMS, t.FEMALE_ITEMS)} della Madonna ${o(t.FEMALE_JOBS)} ${o(t.FEMALE_ADJECTIVES)}`,

    `${composedMaleDivinity}`,
    `${composedFemaleDivinity}`,

    `${composedMaleDivinity} con il ${c(t.MALE_ITEMS, t.MALE_ANIMALS)} ${o(t.MALE_ADJECTIVES)} ${w(t.BODY_LOCATIONS)}`,
    `${composedFemaleDivinity} con il ${c(t.MALE_ITEMS, t.MALE_ANIMALS)} ${o(t.MALE_ADJECTIVES)} ${w(t.BODY_LOCATIONS)}`,
    `${composedMaleDivinity} con la ${c(t.FEMALE_ITEMS, t.FEMALE_ANIMALS)} ${o(t.FEMALE_ADJECTIVES)} ${w(t.BODY_LOCATIONS)}`,
    `${composedFemaleDivinity} con la ${c(t.FEMALE_ITEMS, t.FEMALE_ANIMALS)} ${o(t.FEMALE_ADJECTIVES)} ${w(t.BODY_LOCATIONS)}`,
    
    `${composedMaleDivinity} che vive ${w(t.LOCATIONS)}`,
    `${composedFemaleDivinity} che vive ${w(t.LOCATIONS)}`,

    `${composedMaleDivinity} che ${w(t.VERBS)} i ${c(t.MALE_ANIMALS_PLURAL, t.MALE_ITEMS_PLURAL)} ${o(t.LOCATIONS)}`,
    `${composedMaleDivinity} che ${w(t.VERBS)} le ${c(t.FEMALE_ANIMALS_PLURAL, t.FEMALE_ITEMS_PLURAL)} ${o(t.LOCATIONS)}`,
    `${composedFemaleDivinity} che ${w(t.VERBS)} i ${c(t.MALE_ANIMALS_PLURAL, t.MALE_ITEMS_PLURAL)} ${o(t.LOCATIONS)}`,
    `${composedFemaleDivinity} che ${w(t.VERBS)} le ${c(t.FEMALE_ANIMALS_PLURAL, t.FEMALE_ITEMS_PLURAL)} ${o(t.LOCATIONS)}`,

    `${composedMaleDivinity}  che ${w(t.VERBS_TARGETTABLE)} i ${w(t.MALE_ITEMS_PLURAL)} ai ${w(t.MALE_ANIMALS_PLURAL)} ${o(t.LOCATIONS)}`,
    `${composedMaleDivinity} che ${w(t.VERBS_TARGETTABLE)} i ${w(t.MALE_ITEMS_PLURAL)} ai ${w(t.MALE_ANIMALS_PLURAL)} ${o(t.LOCATIONS)}`,
    `${composedMaleDivinity} che ${w(t.VERBS_TARGETTABLE)} le ${w(t.FEMALE_ITEMS_PLURAL)} alle ${w(t.FEMALE_ANIMALS_PLURAL)} ${o(t.LOCATIONS)}`,
    `${composedMaleDivinity} che ${w(t.VERBS_TARGETTABLE)} le ${w(t.FEMALE_ITEMS_PLURAL)} alle ${w(t.FEMALE_ANIMALS_PLURAL)} ${o(t.LOCATIONS)}`,
    `${composedFemaleDivinity} che ${w(t.VERBS_TARGETTABLE)} i ${w(t.MALE_ITEMS_PLURAL)} ai ${w(t.MALE_ANIMALS_PLURAL)} ${o(t.LOCATIONS)}`,
    `${composedFemaleDivinity} che ${w(t.VERBS_TARGETTABLE)} i ${w(t.MALE_ITEMS_PLURAL)} ai ${w(t.MALE_ANIMALS_PLURAL)} ${o(t.LOCATIONS)}`,
    `${composedFemaleDivinity} che ${w(t.VERBS_TARGETTABLE)} le ${w(t.FEMALE_ITEMS_PLURAL)} alle ${w(t.FEMALE_ANIMALS_PLURAL)} ${o(t.LOCATIONS)}`,
    `${composedFemaleDivinity} che ${w(t.VERBS_TARGETTABLE)} le ${w(t.FEMALE_ITEMS_PLURAL)} alle ${w(t.FEMALE_ANIMALS_PLURAL)} ${o(t.LOCATIONS)}`,
];