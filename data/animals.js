const t = require('./tokens').wrapped;

const male = [
    'cane',
    `cane di ${t.MALE_DIVINITIES}`,
    `cane di ${t.FEMALE_NO_MADONNA_DIVINITIES}`,
    'cane della Madonna',
    'fagiano', 'coyote', 'panda', 'coccodrillo', 'tirannosaurus rex', 'procione', 'tasso'
    'fagiano', 'coyote', 'panda', 'coccodrillo', 'tirannosaurus rex', 'procione', 'tasso', 'porco', 'maiale', 'martin pescatore', 'capibara'
];

const female = [
    'papera', 'moffetta', 'cavia', 'giraffa', 'volpe', 'tigre', 'foca', 'porca', 'giumenta', 'maiala', 'cinciallegra'
];

const malePlural = [
    'fagiani', 'coyote', 'panda', 'coccodrilli', 'tirannosaurus rex', 'procioni', 'tassi', 'porci', 'maiali', 'capibara'
];

const femalePlural = [
    'papere', 'oche', 'moffette', 'cavie', 'giraffe', 'volpi', 'tigri', 'foche', 'porche', 'maiale'
];

module.exports = { male, female, malePlural, femalePlural };