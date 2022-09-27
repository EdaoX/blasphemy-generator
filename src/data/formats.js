const t = require('./tokens');
const w = t.wrap;
const o = t.optional;
const c = t.choose;

const composedMaleDivinity = `${w(t.MALE_DIVINITIES)} ${w(c(t.MALE_ADJECTIVES, t.MALE_ANIMALS, t.MALE_ITEMS, t.MALE_JOBS))} ${o(t.MALE_ADJECTIVES)}`;
const composedFemaleDivinity = `${w(t.FEMALE_DIVINITIES)} ${w(c(t.FEMALE_ADJECTIVES, t.FEMALE_ANIMALS, t.FEMALE_ITEMS, t.FEMALE_JOBS))} ${o(t.FEMALE_ADJECTIVES)}`

module.exports = [
    `${w(c(t.MALE_ANIMALS, t.FEMALE_ANIMALS, t.MALE_ITEMS, t.FEMALE_ITEMS))} di ${w(c(t.MALE_DIVINITIES))} ${o(c(t.MALE_ADJECTIVES, t.MALE_JOBS))}`,
    `${w(c(t.MALE_ANIMALS, t.FEMALE_ANIMALS, t.MALE_ITEMS, t.FEMALE_ITEMS))} di ${w(c(t.FEMALE_NO_MADONNA_DIVINITIES))} ${o(c(t.FEMALE_ADJECTIVES, t.FEMALE_JOBS))}`,
    `${w(c(t.MALE_ANIMALS, t.FEMALE_ANIMALS, t.MALE_ITEMS, t.FEMALE_ITEMS))} della Madonna`,

    `${composedMaleDivinity}`,
    `${composedFemaleDivinity}`,

    `${composedMaleDivinity} con il ${w(c(t.MALE_ITEMS, t.MALE_ANIMALS))} ${o(t.MALE_ADJECTIVES)} ${w(t.BODY_LOCATIONS)}`,
    `${composedFemaleDivinity} con il ${w(c(t.MALE_ITEMS, t.MALE_ANIMALS))} ${o(t.MALE_ADJECTIVES)} ${w(t.BODY_LOCATIONS)}`,
    `${composedMaleDivinity} con la ${w(c(t.FEMALE_ITEMS, t.FEMALE_ANIMALS))} ${o(t.FEMALE_ADJECTIVES)} ${w(t.BODY_LOCATIONS)}`,
    `${composedFemaleDivinity} con la ${w(c(t.FEMALE_ITEMS, t.FEMALE_ANIMALS))} ${o(t.FEMALE_ADJECTIVES)} ${w(t.BODY_LOCATIONS)}`,
    
    `${composedMaleDivinity} che vive ${w(t.LOCATIONS)}`,
    `${composedFemaleDivinity} che vive ${w(t.LOCATIONS)}`,

    `${composedMaleDivinity} che ${w(t.VERBS)} i ${w(c(t.MALE_ANIMALS_PLURAL, t.MALE_ITEMS_PLURAL))} ${o(t.LOCATIONS)}`,
    `${composedMaleDivinity} che ${w(t.VERBS)} le ${w(c(t.FEMALE_ANIMALS_PLURAL, t.FEMALE_ITEMS_PLURAL))} ${o(t.LOCATIONS)}`,
    `${composedFemaleDivinity} che ${w(t.VERBS)} i ${w(c(t.MALE_ANIMALS_PLURAL, t.MALE_ITEMS_PLURAL))} ${o(t.LOCATIONS)}`,
    `${composedFemaleDivinity} che ${w(t.VERBS)} le ${w(c(t.FEMALE_ANIMALS_PLURAL, t.FEMALE_ITEMS_PLURAL))} ${o(t.LOCATIONS)}`,

    `${composedMaleDivinity}  che ${w(t.VERBS_TARGETTABLE)} i ${w(t.MALE_ITEMS_PLURAL)} ai ${w(t.MALE_ANIMALS_PLURAL)} ${o(t.LOCATIONS)}`,
    `${composedMaleDivinity} che ${w(t.VERBS_TARGETTABLE)} i ${w(t.MALE_ITEMS_PLURAL)} ai ${w(t.MALE_ANIMALS_PLURAL)} ${o(t.LOCATIONS)}`,
    `${composedMaleDivinity} che ${w(t.VERBS_TARGETTABLE)} le ${w(t.FEMALE_ITEMS_PLURAL)} alle ${w(t.FEMALE_ANIMALS_PLURAL)} ${o(t.LOCATIONS)}`,
    `${composedMaleDivinity} che ${w(t.VERBS_TARGETTABLE)} le ${w(t.FEMALE_ITEMS_PLURAL)} alle ${w(t.FEMALE_ANIMALS_PLURAL)} ${o(t.LOCATIONS)}`,
    `${composedFemaleDivinity} che ${w(t.VERBS_TARGETTABLE)} i ${w(t.MALE_ITEMS_PLURAL)} ai ${w(t.MALE_ANIMALS_PLURAL)} ${o(t.LOCATIONS)}`,
    `${composedFemaleDivinity} che ${w(t.VERBS_TARGETTABLE)} i ${w(t.MALE_ITEMS_PLURAL)} ai ${w(t.MALE_ANIMALS_PLURAL)} ${o(t.LOCATIONS)}`,
    `${composedFemaleDivinity} che ${w(t.VERBS_TARGETTABLE)} le ${w(t.FEMALE_ITEMS_PLURAL)} alle ${w(t.FEMALE_ANIMALS_PLURAL)} ${o(t.LOCATIONS)}`,
    `${composedFemaleDivinity} che ${w(t.VERBS_TARGETTABLE)} le ${w(t.FEMALE_ITEMS_PLURAL)} alle ${w(t.FEMALE_ANIMALS_PLURAL)} ${o(t.LOCATIONS)}`,
];