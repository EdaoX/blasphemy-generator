const t = require('./tokens');
const w = t.wrap;
const c = t.choose;

const male = [
    'pornodivo', 'giardiniere', 'puttaniero', `allevatore di ${w(c(t.MALE_ANIMALS_PLURAL, t.FEMALE_ANIMALS_PLURAL))}`, 'stagista', 'corriere Amazon', 'becchino', 'assassino', 'schiavista', 'idraulico',
    'spacciatore', 'pescatore', 'merdaiolo', 'proctologo', `venditore di ${w(c(t.MALE_ITEMS_PLURAL, t.FEMALE_ITEMS_PLURAL, t.MALE_ANIMALS_PLURAL, t.FEMALE_ANIMALS_PLURAL))}`
];

const female = [
    'pornoattrice', 'meretrice', `allevatrice di ${w(c(t.MALE_ANIMALS_PLURAL, t.FEMALE_ANIMALS_PLURAL))}`, 'stagista', 'corriere Amazon', 'becchina', 'assassina', 'schiavista', 'idraulica',
    'spacciatrice', 'pescatrice', 'merdaiola', 'proctologa', `venditrice di ${w(c(t.MALE_ITEMS_PLURAL, t.FEMALE_ITEMS_PLURAL, t.MALE_ANIMALS_PLURAL, t.FEMALE_ANIMALS_PLURAL))}`
];

module.exports = { male, female };