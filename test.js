'use strict';

const rfc3339nano = require('./index');

const testCases = {
    '2006-01-02T15:04:05.999999999Z07:00' : '',
    '2018-08-31T06:58:08.161197Z'         : '',
};

for (let i in testCases) {
    console.log(rfc3339nano.fromRfc3339NanoToTimestamp(i));
}
