const sudokuAnalyzer = require('./sudokuAnalyzer.js');
let row = process.argv[2];
let col = process.argv[3];

console.log(sudokuAnalyzer.determineSquare(row, col))