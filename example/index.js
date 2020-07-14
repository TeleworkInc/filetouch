const filetouch = require('..');

// create test.txt if doesn't exist
filetouch.file('test.txt');

// create test2.txt and write into it, if doesn't exist
filetouch.file('test2.txt', 'test text goes here');

// create test3 directory if doesn't exist
filetouch.dir('test3');