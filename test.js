console.log('Start of script');
// Timers
setTimeout(() => {
console.log('Timer callback executed');
}, 1000); 

// Pending Callbacks
process.nextTick(() => {
console.log('process.nextTick callback executed');
});

// Poll (simulating I/O)
const fs = require('fs');
fs.readFile('example.txt', 'utf8', (err, data) => {
if (err) {
console.error('Error reading file:', err.message);
} else {
console.log('File content:', data);
}
});

//setImmediate
setImmediate(() => {
console.log('setImmediate callback executed');
});

console.log('End of script');


// Output:
// Start of script
// End of script
// process.nextTick callback executed
// setImmediate callback executed
// File content: Abdul Wahab -> abdul-wahab619
// Timer callback executed