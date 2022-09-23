const t = require('./tokens').wrapped;

const male = [
    'cane',
    `cane di ${t.MALE_DIVINITIES}`,
    `cane di ${t.FEMALE_NO_MADONNA_DIVINITIES}`,
    'cane della Madonna',
    'fagiano', 'coyote', 'panda', 'coccodrillo', 'tirannosaurus rex', 'procione', 'tasso'
];

const female = [
    'papera', 'oca', 'moffetta', 'cavia', 'giraffa', 'volpe', 'tigre', 'foca'
];

const malePlural = [
    'fagiani', 'coyote', 'panda', 'coccodrilli', 'tirannosaurus rex', 'procioni', 'tassi'
];

const femalePlural = [
    'papere', 'oche', 'moffette', 'cavie', 'giraffe', 'volpi', 'tigri', 'foche'
];

module.exports = { male, female, malePlural, femalePlural };