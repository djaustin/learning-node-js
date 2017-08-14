// This is part of V8, not node-specific
let buffer = new ArrayBuffer(8);
console.log(buffer);

let view = new Int32Array(buffer);
console.log(view);

// Our buffer is 8 bytes, or 64 bits long. Our array stores 32 bit ints so we can only store two numbers
view[0] = 1;
view[1] = 23;

// This does not get saved in the array as the underlying buffer is too small
view[2] = 3;

console.log(view);
console.log(buffer);
