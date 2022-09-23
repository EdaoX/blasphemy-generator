module.exports.pickRandomArrayElement = arr => {
    if(!arr || !arr.length)
        return null;
    
    return arr[Math.floor(Math.random() * arr.length)];
}