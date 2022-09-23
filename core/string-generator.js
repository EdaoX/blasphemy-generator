const {pickRandomArrayElement} = require('./utilities');

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
        const wrappedSymbol = StringGenerator.wrapSymbol(symbol);
        this.sets[wrappedSymbol] = set;
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

        return generated;
    }

    replaceTokens(format)
    {
        return format.replace(/({{\w+}})/g, (match, token) => this.replaceToken(token));
    }

    pickRandomFormat()
    {
        return pickRandomArrayElement(this.formats);
    }

    replaceToken(token)
    {
        const set = this.getSet(token);
        if(!set.length)
            return '';
        
        return pickRandomArrayElement(set);
    }

    hasReplaceableTokens(checkedString)
    {
        const tokens = Object.keys(this.sets);
        return !!tokens.find(token => checkedString.includes(token))
    }
}