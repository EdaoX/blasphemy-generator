const t = require('./tokens');
const w = t.wrap;
const o = token => w(t.optional(token));
const c = (...tokens) => w(t.choose(...tokens));


const composedMaleAdjectivesOnly = `${w(t.MALE_DIVINITIES)} ${w(t.MALE_ADJECTIVES)}, ${w(t.MALE_ADJECTIVES)} e anche ${o("un po'")} ${w(t.MALE_ADJECTIVES)}`;
const composedFemaleAdjectivesOnly = `${w(t.FEMALE_DIVINITIES)} ${w(t.FEMALE_ADJECTIVES)}, ${w(t.FEMALE_ADJECTIVES)} e anche ${o("un po'")} ${w(t.FEMALE_ADJECTIVES)}`;

const composedMaleDivinity = `${w(t.MALE_DIVINITIES)} ${c(t.MALE_ADJECTIVES, t.MALE_ANIMALS, t.MALE_ITEMS, t.MALE_JOBS)} ${o(t.MALE_ADJECTIVES)}`;
const composedFemaleDivinity = `${w(t.FEMALE_DIVINITIES)} ${c(t.FEMALE_ADJECTIVES, t.FEMALE_ANIMALS, t.FEMALE_ITEMS, t.FEMALE_JOBS)} ${o(t.FEMALE_ADJECTIVES)}`

const composedDivinity = c(composedMaleDivinity, composedFemaleDivinity, composedMaleAdjectivesOnly, composedFemaleAdjectivesOnly);

module.exports = [
    `${c(t.MALE_ANIMALS, t.FEMALE_ANIMALS, t.MALE_ITEMS, t.FEMALE_ITEMS)} di ${c(t.MALE_DIVINITIES)} ${o(t.MALE_JOBS)} ${o(t.MALE_ADJECTIVES)}`,
    `${c(t.MALE_ANIMALS, t.FEMALE_ANIMALS, t.MALE_ITEMS, t.FEMALE_ITEMS)} di ${c(t.FEMALE_NO_MADONNA_DIVINITIES)} ${o(t.FEMALE_JOBS)} ${o(t.FEMALE_ADJECTIVES)}`,
    `${c(t.MALE_ANIMALS, t.FEMALE_ANIMALS, t.MALE_ITEMS, t.FEMALE_ITEMS)} della Madonna ${o(t.FEMALE_JOBS)} ${o(t.FEMALE_ADJECTIVES)}`,

    `${composedMaleDivinity}`,
    `${composedFemaleDivinity}`,

    `${composedMaleDivinity} che vive ${w(t.LOCATIONS)}`,
    `${composedFemaleDivinity} che vive ${w(t.LOCATIONS)}`,

    `${composedDivinity} che ${w(t.VERBS)}`,
    `${composedDivinity} che ${w(t.VERBS)}, ${w(t.VERBS)} ma, soprattutto, ${w(t.VERBS)}`,
    `${composedDivinity} che ${w(t.VERBS)} di giorno e ${w(t.VERBS)} di notte`,

    `${composedMaleDivinity} ${o(`che ${w(t.VERBS)}`)} con il ${c(t.MALE_ITEMS, t.MALE_ANIMALS)} ${o(t.MALE_ADJECTIVES)} ${w(t.BODY_LOCATIONS)}`,
    `${composedFemaleDivinity} ${o(`che ${w(t.VERBS)}`)} con il ${c(t.MALE_ITEMS, t.MALE_ANIMALS)} ${o(t.MALE_ADJECTIVES)} ${w(t.BODY_LOCATIONS)}`,
    `${composedMaleDivinity} ${o(`che ${w(t.VERBS)}`)} con la ${c(t.FEMALE_ITEMS, t.FEMALE_ANIMALS)} ${o(t.FEMALE_ADJECTIVES)} ${w(t.BODY_LOCATIONS)}`,
    `${composedFemaleDivinity} ${o(`che ${w(t.VERBS)}`)} con la ${c(t.FEMALE_ITEMS, t.FEMALE_ANIMALS)} ${o(t.FEMALE_ADJECTIVES)} ${w(t.BODY_LOCATIONS)}`,
    
    
];