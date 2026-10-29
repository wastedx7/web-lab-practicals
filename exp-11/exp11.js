const fs = require('fs');

// File System operations
fs.writeFileSync(
  'sample.txt',
  'Hello, this is Node.js File System.\n'
);

fs.appendFileSync(
  'sample.txt',
  'This is additional data added to the file.\n'
);

console.log('File exists:', fs.existsSync('sample.txt'));

const fileData = fs.readFileSync('sample.txt', 'utf8');

console.log('\nFile Content:');
console.log(fileData);

// Buffer operations
const buffer = Buffer.from('Hello Node.js Buffer');

console.log('Buffer:');
console.log(buffer);

console.log('Buffer as String:');
console.log(buffer.toString());

// Stream operations
const readStream = fs.createReadStream('sample.txt', {
  encoding: 'utf8'
});

console.log('\nStream Data:');

readStream.on('data', (chunk) => {
  console.log(chunk);
});

readStream.on('end', () => {
  console.log('Stream reading completed.');
});