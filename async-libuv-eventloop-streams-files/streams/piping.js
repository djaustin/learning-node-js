// Piping allows the connection of two or more streams
// Eg. piping a readable stream to a writeable stream in order to copy the contents
const fs = require('fs');

// gzip support
const zlib = require('zlib');


// Returns a Readable Stream encoded in utf8 with a buffer size of 1kB
let readable = fs.createReadStream(`${__dirname}/text-file-pipe.txt`);
// Returns a writeable stream
let writeable = fs.createWriteStream(`${__dirname}/text-file-pipe-copy.txt`);
// Returns a transform stream that is both readable and writeable. It compresses every chunk it receives
let gzip = zlib.createGzip();
// Returns a writeable stream
let compressed = fs.createWriteStream(`${__dirname}/text-file-pipe.txt.gz`);


readable.on('data', (chunk) => {
  console.log(`Sending ${chunk.length} byte(s) of data to the writeable stream`);
})

// Read everything from readable and write it to writeable
// It is effectively syntactic sugar for the way we wrote it in the app.js file
// Pipe returns the destination, allowing us to chain pipes together where possible. eg. If we piped readable to a duplex stream
readable.pipe(writeable);

// Pipes readable through gzip and into compressed
readable.pipe(gzip).pipe(compressed);
gzip.on('data', (chunk) => {
  console.log(`Compressed data to ${chunk.length} byte(s)`);
});


// Streams are performant and should be used where possible
// They minimise buffer sizes and reduce memory use
