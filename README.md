# filetouch

Exposes a synchronous `if (!fs.existsSync(...))` check around an
`fs.writeFileSync` or `fs.mkdirSync` call, depending on whether `filetouch.dir`
or `filetouch.file` is called.

**Files are not modified if they already exist.**

```javascript
const filetouch = require('filetouch');

// create test.txt if doesn't exist
filetouch.file('test.txt');

// create test2.txt and write into it, if doesn't exist
filetouch.file('test2.txt', 'test text goes here');

// create test3 directory if doesn't exist
filetouch.dir('test3');
```