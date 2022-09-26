const {pickRandomArrayElement, randomTrue, capitalize, removeDoubleSpaces} = require('./utilities');

module.exports = class StringGenerator
{
    maxIterations = 10;

    constructor()
    {
        this.formats = [];
        this.sets = {}
    }

    static wrapSymbol(symbol)
    {
        return `{{${symbol}}}`;
    }

    addFormat(format)
    {
        this.formats.push(format);
    }

    addFormats(formats)
    {
        formats.forEach((format) => this.addFormat(format));
    }

    addSet(symbol, set)
    {
        this.sets[symbol] = set;
    }

    getSet(symbol)
    {
        return this.sets[symbol] || [];
    }

    setMaxIterations(iterations)
    {
        this.maxIterations = iterations;
    }

    getMaxIterations()
    {
        return this.maxIterations;
    }

    generate()
    {
        let generated = this.pickRandomFormat();
        let iteration = 0;

        while(this.hasReplaceableTokens(generated) && iteration < this.getMaxIterations()) {
            iteration += 1;
            generated = this.replaceTokens(generated);
        }

        return capitalize(removeDoubleSpaces(generated.trim()));
    }

    replaceTokens(format)
    {
        return format.replace(/({{\??[\w|]+}})/g, (match, token) => this.replaceToken(token));
    }

    pickRandomFormat()
    {
        return pickRandomArrayElement(this.formats);
    }

    replaceToken(token)
    {
        token = token.replace(/{{|}}/g, '');

        if(token.includes('?')) {
            if(!randomTrue()) {
                return '';
            }
            token = token.replace('?', '');
        }

        if(token.includes('|')) {
            token = pickRandomArrayElement(token.split('|'));
        }

        const set = this.getSet(token);
        if(!set.length)
            return token;
        
        return pickRandomArrayElement(set);
    }

    hasReplaceableTokens(checkedString)
    {
        return !!checkedString.match(/({{\??[\w|]+}})/);
    }
}