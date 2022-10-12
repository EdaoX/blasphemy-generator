const t = require('./tokens');
const w = t.wrap;
const o = token => w(t.optional(token));
const c = t.choose;
const cw = (...tokens) => w(c(...tokens));

const maleItem  = cw(t.MALE_ITEMS_PLURAL, t.MALE_ANIMALS_PLURAL);
const femaleItem  = cw(t.FEMALE_ITEMS_PLURAL, t.FEMALE_ANIMALS_PLURAL);

const maleSubject = `i ${maleItem}`;
const femaleSubject = `le ${femaleItem}`
const subject = cw(maleSubject, femaleSubject);

const maleSubjectAnimal = `i ${w(t.MALE_ANIMALS_PLURAL)}`;
const femaleSubjectAnimal = `le ${w(t.FEMALE_ANIMALS_PLURAL)}`;
const subjectAnimal = cw(maleSubjectAnimal, femaleSubjectAnimal);

const maleTarget = `ai ${w(maleItem)}`;
const femaleTarget = `alle ${w(femaleItem)}`;
const target = cw(maleTarget, femaleTarget);

const maleTargetAnimal = `ai ${w(t.MALE_ANIMALS_PLURAL)}`;
const femaleTargetAnimal = `alle ${w(t.FEMALE_ANIMALS_PLURAL)}`;
const targetAnimal = cw(maleTargetAnimal, femaleTargetAnimal);

const maleTool = `il ${w(t.MALE_ITEMS)}`;
const femaleTool = `la ${w(t.FEMALE_ITEMS)}`;
const tool = cw(maleTool, femaleTool);

const special = [
    `ruba ${subject} ${o(targetAnimal)}`,
    `indica ${subject} ${o(targetAnimal)}`,
    `lancia ${subject} ${o(target)}`,
    `vende ${subject} ${o(targetAnimal)}`,
    `paga ${subject} ${o(targetAnimal)}`,
    `mette ${subject} ${w(t.BODY_LOCATIONS)} ${cw('alla Madonna', `a ${w(t.MALE_DIVINITIES)}`, `a ${w(t.FEMALE_DIVINITIES)}`)}`,
    `picchia ${subject} con ${tool}`
];

const animalOnly = [
    'rapisce', 'palpeggia', 'squarta', 'scippa', 'molesta', 'rapina', 'scotenna', 'trucida', 'tortura', 'scuoia'
];

const generic = [
    'sgrida', 'squadra', 'importuna', "investe con l'auto", 'sniffa', 'brucia', 'lecca', 'annusa', 
    'cuoce', 'sbrana', 'spezza', 'spinge', 'solletica', 'sotterra', 'impala', 'insulta', 'denigra', 'devasta',
    'spreme', 'diffama', 'prende a sprangate', 'piscia sopra', 'lincia', 'addita', 'mastica', 'teme'
];

module.exports = [
    ...animalOnly.map(verb => `${verb} ${subjectAnimal}`), 
    ...generic.map(verb => `${verb} ${subject}`), 
    ...special
];