'use strict';

const fromRfc3339NanoToTimestamp = (string) => {
    const stReg = /(\d\d\d\d)(-)?(\d\d)(-)?(\d\d)(T)?(\d\d)(:)?(\d\d)?(:)?(\d\d)?([\.,]\d+)?($|Z|([+-])(\d\d)(:)?(\d\d)?)/i;
    const nsReg = /(^[^\.]*)(\.\d*)(Z.*$)/;
    if (!string || !stReg.test(string)) {
        return null;
    }
    let dt = new Date(string.replace(nsReg, '$1$3')
                            .replace(/Z\-/i, '-')
                            .replace(/Z\+/i, '+')
                            .replace(/Z/i,   '+')
                            .replace(/\+$/,  'Z'));
    let ns = string.replace(nsReg, '$2');
    return !dt || dt.toString() === 'Invalid Date' || !ns || ns === string
        || (ns = ns.replace(/^\./, '').padEnd(9, '0')).length !== 9
         ? null : Math.floor(dt.getTime() / 1000) + ns;
};

const fromTimestampToRfc3339Nano = (timestamp) => {
    const nsReg = /(\d*)(\d{9})/;
    const ts = String(timestamp).replace(nsReg, '$1');
    const ns = String(timestamp).replace(nsReg, '$2');
    if (!timestamp || parseInt(timestamp) < 999999999
     || !parseInt(ts) || !parseInt(ns)) {
        return null;
    }
    return new Date(parseInt(ts + '000')).toISOString().replace('.000', `.${ns}`);
};

module.exports = {
    fromRfc3339NanoToTimestamp,
    fromTimestampToRfc3339Nano,
};
