// Streams inherit from the event emitter
// There are multiple types of stream like readable, writeable, duplex, transform, passthrough which serve different purposes
// These subtypes all inherit from the stream constructor
// Streams are abstract base classes from which custom streams are built]
// For example, a web request to the server is readable to node and a response is writeable to node

const fs = require('fs');

// Returns a Readable Stream encoded in utf8 with a buffer size of 1kB
let readable = fs.createReadStream(`${__dirname}/text-file.txt`, {encoding: 'utf8', highWaterMark: 1024});
// Returns a writeable stream
let writeable = fs.createWriteStream(`${__dirname}/text-file-copy.txt`);

// Event emitted when there is data to be processed
// The stream fills a buffer. If the data in the file is of smaller size than the buffer then the whole file will be processed in one, otherwise it will come through bit by bit
// A file stream buffer can hold up to 64kB and this is default. It can be reducrs using the highWaterMark options as above which will force our data to be processed 1kb at a time
readable.on('data', (chunk) => {
  console.log('Writing chunk');
  console.log(chunk);
  // Whenever we get a chunk of data from our read stream, send it to the write stream
  // In this way, we can reduce memory load by avoiding having to read the entire text file into memory before writing it to the new file
  writeable.write(chunk);
})

readable.on('end', () => {
  console.log('File read');
});
