import { fromRfc3339NanoToTimestamp, fromTimestampToRfc3339Nano, adjustRfc3339ByNano } from './index.mjs';
import * as mathjs from 'mathjs';

const testCases = {
    '2006-01-02T15:04:05.999999999Z07:00': '1136189045999999999',
    '2018-08-31T06:58:08.161197Z': '1535698688161197000',
};

let idx = 0;
for (let i in testCases) {
    const timestamp = fromRfc3339NanoToTimestamp(i);
    const rfc3339Nano = fromTimestampToRfc3339Nano(testCases[i]);
    const adjusted = adjustRfc3339ByNano(i, 1);
    const [rts, trs, ads] = [
        timestamp === testCases[i],
        fromRfc3339NanoToTimestamp(rfc3339Nano) === fromRfc3339NanoToTimestamp(i),
        fromRfc3339NanoToTimestamp(adjusted) === mathjs.add(mathjs.bignumber(testCases[i]), 1).toString(),
    ].map(rs => rs ? '✔' : '✘');
    console.log(`=== Testcase ${++idx} ===`);
    console.log(`Converting Rfc3339Nano ${i} to timestamp ${timestamp}: ${rts}`);
    console.log(`Converting timestamp ${testCases[i]} to Rfc3339Nano ${rfc3339Nano}: ${trs}`);
    console.log(`Adjust Rfc3339ByNano ${i} by adding 1 nanosecond ${adjusted}: ${ads}`);
    console.log(`\n`);
}
