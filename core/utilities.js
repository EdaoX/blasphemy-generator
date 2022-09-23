module.exports.pickRandomArrayElement = arr => {
    if(!arr || !arr.length)
        return null;
    
    return arr[Math.floor(Math.random() * arr.length)];
}

module.exports.randomTrue = (percentage = 0.5) => Math.random() > percentage;

module.exports.capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);

module.exports.removeDoubleSpaces = str => str.replace(/ {2,}/g, ' ');