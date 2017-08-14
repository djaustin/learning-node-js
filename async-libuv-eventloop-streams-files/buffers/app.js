// Always available, no need to import
// Buffer is an extension of the V8 engine in node js to allow for processing of binary data
let buf = new Buffer('Hello', 'utf8');
console.log(buf);
console.log(buf.toString());
console.log(buf.toJSON());
console.log(buf[2]);

// Buffer is a finite size so this will overwrite the start of the word 'hello'
buf.write('wo');
console.log(buf.toString()); // => 'wollo'
