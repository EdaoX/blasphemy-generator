const male = [
    'Dio', 'Gesù', 'San Giuseppe', 
    'San Marco', 'San Pietro', 'San Matteo', 'San Luca'
];

const female = [
    'Madonna', 'Santa Maria', 'Maria Maddalena'
];

const femaleNoMadonna = female.filter(name => name !== 'Madonna');

module.exports = { male, female, femaleNoMadonna };