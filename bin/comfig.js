#!/usr/bin/env node
/*
 * npx comfig ...
 */

const Comfig = require('../src/comfig');

// Simple CLI interface
const args = process.argv.slice(2);
if (args.length < 2) {
    console.log('Usage: comfig <APP_NAME> <CONFIG_KEY>');
    process.exit(1);
}

const [appName, key] = args;
const cfg = Comfig(appName);
const value = cfg.getItem(key);

if (value !== undefined) {
    console.log(value);
    process.exit(0);
} else {
    console.error('Config value not found');
    process.exit(1);
}
