# RFC3339Nano
RFC3339Nano Tools for Javascript

`This project is a pure ES6 module.`

## Usage

```bash
$ npm install rfc3339nano
```

```javascript
import { fromRfc3339NanoToTimestamp, fromTimestampToRfc3339Nano, adjustRfc3339ByNano } from 'RFC3339Nano';

const timestamp = fromRfc3339NanoToTimestamp('2006-01-02T15:04:05.999999999Z07:00');
const rfcTime = fromTimestampToRfc3339Nano('1136189045999999999');
const newRfcTime = adjustRfc3339ByNano('2018-08-31T06:58:08.161197Z', 1);
```
