// Always available, no need to import
let buf = new Buffer('Hello', 'utf8');
console.log(buf);
console.log(buf.toString());
console.log(buf.toJSON());
console.log(buf[2]);

// Buffer is a finite size so this will overwrite the start of the word 'hello'
buf.write('wo');
console.log(buf.toString()); // => 'wollo'
