const t = require('./tokens');
const w = t.wrap;

const male = [
    'cane',
    `cane di ${w(t.MALE_DIVINITIES)}`,
    `cane di ${w(t.FEMALE_NO_MADONNA_DIVINITIES)}`,
    'cane della Madonna', 
    'fagiano', 'coyote', 'panda', 'coccodrillo', 'procione', 'tasso', 'porco', 'maiale', 'martin pescatore', 'capibara',
    'bue', 'serpente', 'lupo', 'lama', 'coleottero', 'mandingo','pinguino'
];

const female = [
    'papera', 'moffetta', 'cavia', 'giraffa', 'volpe', 'tigre', 'foca', 'giumenta', 'cinciallegra', 'scimmia',
    'rana'
];

const malePlural = [
    'fagiani', 'coyote', 'panda', 'coccodrilli', 'procioni', 'tassi', 'porci', 'maiali', 'capibara',
    'buoi', 'serpenti', 'lupi', 'lama', 'coleotteri'
];

const femalePlural = [
    'papere', 'oche', 'moffette', 'cavie', 'giraffe', 'volpi', 'tigri', 'foche', 'scimmie', 'rane'
];

module.exports = { male, female, malePlural, femalePlural };