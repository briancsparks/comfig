/*
 * comfig.js
 */

class Comfig {
    constructor(appName, shortName) {
        this.appName = appName;
        this.shortName = shortName;
    }

    getItem(key, defaultValue) {
        // Check environment variables first
        const envKey = `${this.appName}_${key}`;
        if (process.env[envKey] !== undefined) {
            if (defaultValue !== undefined) {
                return this._parseValue(process.env[envKey], defaultValue);
            }
            return process.env[envKey];
        }

        // Check CLI args
        const cliKey = `--${key.toLowerCase().replace(/_/g, '-')}`;
        const args = process.argv.slice(2);
        const argIndex = args.indexOf(cliKey);
        if (argIndex !== -1 && args[argIndex + 1]) {
            if (defaultValue !== undefined) {
                return this._parseValue(args[argIndex + 1], defaultValue);
            }
            return args[argIndex + 1];
        }

        return defaultValue;
    }

    _parseValue(value, defaultValue) {
        const type = typeof defaultValue;
        switch(type) {
            case 'boolean':
                return value.toLowerCase() === 'true';
            case 'number':
                return Number(value);
            default:
                return value;
        }
    }
}

module.exports = function(appName, shortName) {
    return new Comfig(appName, shortName);
};
