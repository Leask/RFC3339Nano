import * as rfc3339nano from './index.mjs';

const testCases = {
    '2006-01-02T15:04:05.999999999Z07:00': '1136189045999999999',
    '2018-08-31T06:58:08.161197Z': '1535698688161197000',
};

for (let i in testCases) {
    console.log(rfc3339nano.fromRfc3339NanoToTimestamp(i),
        rfc3339nano.fromTimestampToRfc3339Nano(testCases[i]),
        rfc3339nano.adjustRfc3339ByNano(i, 1));
}
