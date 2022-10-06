const t = require('./tokens');
const w = t.wrap;
const c = (...tokens) => w(t.choose(...tokens));

const male = [
    'pornodivo', 'giardiniere', 'puttaniero', `allevatore di ${c(t.MALE_ANIMALS_PLURAL, t.FEMALE_ANIMALS_PLURAL)}`, 'stagista', 'corriere Amazon', 'becchino', 'assassino', 'schiavista', 'idraulico',
    'spacciatore', 'pescatore', 'merdaiolo', 'proctologo', `venditore di ${c(t.MALE_ITEMS_PLURAL, t.FEMALE_ITEMS_PLURAL, t.MALE_ANIMALS_PLURAL, t.FEMALE_ANIMALS_PLURAL)}`,
    `riparatore di ${c(t.MALE_ITEMS_PLURAL, t.FEMALE_ITEMS_PLURAL)}`, 'stagista', 'pifferaio', 'stupratore', 'raccattapalle', 'ventriloquo', 
    `${c('violentatore','stupratore')} di ${c(t.MALE_ITEMS_PLURAL, t.FEMALE_ITEMS_PLURAL, t.MALE_ANIMALS_PLURAL, t.FEMALE_ANIMALS_PLURAL)}`
];

const female = [
    'pornoattrice', 'meretrice', `allevatrice di ${c(t.MALE_ANIMALS_PLURAL, t.FEMALE_ANIMALS_PLURAL)}`, 'stagista', 'corriere Amazon', 'becchina', 'assassina', 'schiavista', 'idraulica',
    'spacciatrice', 'pescatrice', 'merdaiola', 'proctologa', `venditrice di ${c(t.MALE_ITEMS_PLURAL, t.FEMALE_ITEMS_PLURAL, t.MALE_ANIMALS_PLURAL, t.FEMALE_ANIMALS_PLURAL)}`, 'squillo di lusso',
    `riparatrice di ${c(t.MALE_ITEMS_PLURAL, t.FEMALE_ITEMS_PLURAL)}`, 'stagista', 'pifferaia', 'stupratrice', 'raccattapalle', 'ventriloqua', 
    `${c('violentatrice','stupratrice')} di ${c(t.MALE_ITEMS_PLURAL, t.FEMALE_ITEMS_PLURAL, t.MALE_ANIMALS_PLURAL, t.FEMALE_ANIMALS_PLURAL)}`
];

module.exports = { male, female };