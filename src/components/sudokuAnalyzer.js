const sudokuAnalyzer = {
  checkRowForDuplicates: function(table, rowNumber){
    let numbersInRow = {};
    for (let col = 1; col <=9; col++){
      let currentCellValue = table[`row${rowNumber}`][`col${col}`];
      if (!numbersInRow[currentCellValue] && currentCellValue !== null){
        numbersInRow[currentCellValue] = true;
      } else if (currentCellValue !== null){
        numbersInRow[currentCellValue] = 'multiples!!';
        return true;
      }
    }
    // console.log(numbersInRow);
    return false;
  },

  checkColForDuplicates: function(table, colNumber){
    let numbersInCol = {};
    for (let row = 1; row <=9; row++){
      let currentCellValue = table[`row${row}`][`col${colNumber}`];
      if (!numbersInCol[currentCellValue] && currentCellValue !== null){
        numbersInCol[currentCellValue] = true;
      } else if (currentCellValue !== null){
        numbersInCol[currentCellValue] = 'multiples!!';
        return true;
      }
    }
    // console.log(numbersInCol);
    return false;
  },

  checkSquareForDuplicates: function(table, square){
    switch(square){
      case 'a':{
        // console.log('Checking Square A');
        let numbersInSquare = {};
        for (let row = 1; row <=3; row++){
          for (let col = 1; col <=3; col++){
            let currentCellValue = table[`row${row}`][`col${col}`];
            // console.log(`Value in row${row}, col${col} = ${currentCellValue}`);
            if (!numbersInSquare[currentCellValue] && currentCellValue !== null){
              numbersInSquare[currentCellValue] = true;
            } else if (currentCellValue !== null){
              numbersInSquare[currentCellValue] = 'multiples!!';
              return true;
            }
          }
        }
        // console.log(numbersInSquare);
        return false;
      }

      case 'b':{
        // console.log('Checking Square B');
        let numbersInSquare = {};
        for (let row = 1; row <=3; row++){
          for (let col = 4; col <=6; col++){
            let currentCellValue = table[`row${row}`][`col${col}`];
            // console.log(`Value in row${row}, col${col} = ${currentCellValue}`);
            if (!numbersInSquare[currentCellValue] && currentCellValue !== null){
              numbersInSquare[currentCellValue] = true;
            } else if (currentCellValue !== null){
              numbersInSquare[currentCellValue] = 'multiples!!';
              return true;
            }
          }
        }
        // console.log(numbersInSquare);
        return false;
      }

      case 'c':{
        // console.log('Checking Square C');
        let numbersInSquare = {};
        for (let row = 1; row <=3; row++){
          for (let col = 7; col <=9; col++){
            let currentCellValue = table[`row${row}`][`col${col}`];
            // console.log(`Value in row${row}, col${col} = ${currentCellValue}`);
            if (!numbersInSquare[currentCellValue] && currentCellValue !== null){
              numbersInSquare[currentCellValue] = true;
            } else if (currentCellValue !== null){
              numbersInSquare[currentCellValue] = 'multiples!!';
              return true;
            }
          }
        }
        // console.log(numbersInSquare);
        return false;
      }

      case 'd':{
        // console.log('Checking Square D');
        let numbersInSquare = {};
        for (let row = 4; row <=6; row++){
          for (let col = 1; col <=3; col++){
            let currentCellValue = table[`row${row}`][`col${col}`];
            // console.log(`Value in row${row}, col${col} = ${currentCellValue}`);
            if (!numbersInSquare[currentCellValue] && currentCellValue !== null){
              numbersInSquare[currentCellValue] = true;
            } else if (currentCellValue !== null){
              numbersInSquare[currentCellValue] = 'multiples!!';
              return true;
            }
          }
        }
        // console.log(numbersInSquare);
        return false;
      }

      case 'e':{
        // console.log('Checking Square E');
        let numbersInSquare = {};
        for (let row = 4; row <=6; row++){
          for (let col = 4; col <=6; col++){
            let currentCellValue = table[`row${row}`][`col${col}`];
            // console.log(`Value in row${row}, col${col} = ${currentCellValue}`);
            if (!numbersInSquare[currentCellValue] && currentCellValue !== null){
              numbersInSquare[currentCellValue] = true;
            } else if (currentCellValue !== null){
              numbersInSquare[currentCellValue] = 'multiples!!';
              return true;
            }
          }
        }
        // console.log(numbersInSquare);
        return false;
      }

      case 'f':{
        // console.log('Checking Square F');
        let numbersInSquare = {};
        for (let row = 4; row <=6; row++){
          for (let col = 7; col <=9; col++){
            let currentCellValue = table[`row${row}`][`col${col}`];
            // console.log(`Value in row${row}, col${col} = ${currentCellValue}`);
            if (!numbersInSquare[currentCellValue] && currentCellValue !== null){
              numbersInSquare[currentCellValue] = true;
            } else if (currentCellValue !== null){
              numbersInSquare[currentCellValue] = 'multiples!!';
              return true;
            }
          }
        }
        // console.log(numbersInSquare);
        return false;
      }

      case 'g':{
        // console.log('Checking Square G');
        let numbersInSquare = {};
        for (let row = 7; row <=9; row++){
          for (let col = 1; col <=3; col++){
            let currentCellValue = table[`row${row}`][`col${col}`];
            // console.log(`Value in row${row}, col${col} = ${currentCellValue}`);
            if (!numbersInSquare[currentCellValue] && currentCellValue !== null){
              numbersInSquare[currentCellValue] = true;
            } else if (currentCellValue !== null){
              numbersInSquare[currentCellValue] = 'multiples!!';
              return true;
            }
          }
        }
        // console.log(numbersInSquare);
        return false;
      }

      case 'h':{
        // console.log('Checking Square H');
        let numbersInSquare = {};
        for (let row = 7; row <=9; row++){
          for (let col = 4; col <=6; col++){
            let currentCellValue = table[`row${row}`][`col${col}`];
            // console.log(`Value in row${row}, col${col} = ${currentCellValue}`);
            if (!numbersInSquare[currentCellValue] && currentCellValue !== null){
              numbersInSquare[currentCellValue] = true;
            } else if (currentCellValue !== null){
              numbersInSquare[currentCellValue] = 'multiples!!';
              return true;
            }
          }
        }
        // console.log(numbersInSquare);
        return false;
      }

      case 'i':{
        // console.log('Checking Square I');
        let numbersInSquare = {};
        for (let row = 7; row <=9; row++){
          for (let col = 7; col <=9; col++){
            let currentCellValue = table[`row${row}`][`col${col}`];
            // console.log(`Value in row${row}, col${col} = ${currentCellValue}`);
            if (!numbersInSquare[currentCellValue] && currentCellValue !== null){
              numbersInSquare[currentCellValue] = true;
            } else if (currentCellValue !== null){
              numbersInSquare[currentCellValue] = 'multiples!!';
              return true;
            }
          }
        }
        // console.log(numbersInSquare);
        return false;
      }

      default: {return 'Error: Trying to check unknown square';}

    }

  },

  determineSquare(row, col){
    // Determine what square (a, b, c...) the cell (row, col) is in:
    if (1 <= row && row <= 3 && 1 <= col && col <= 3){
      return 'a';
    } else if (1 <= row && row <= 3 && 4 <= col && col <= 6){
      return 'b';
    } else if (1 <= row && row <= 3 && 7 <= col && col <= 9){
      return 'c';
    } else if (4 <= row && row <= 6 && 1 <= col && col <= 3){
      return 'd';
    } else if (4 <= row && row <= 6 && 4 <= col && col <= 6){
      return 'e';
    } else if (4 <= row && row <= 6 && 7 <= col && col <= 9){
      return 'f';
    } else if (7 <= row && row <= 9 && 1 <= col && col <= 3){
      return 'g';
    } else if (7 <= row && row <= 9 && 4 <= col && col <= 6){
      return 'h';
    } else if (7 <= row && row <= 9 && 7 <= col && col <= 9){
      return 'i';
    }    
  },

  isCellValid: function(table, row, col){
    let square = this.determineSquare(row, col);

    let isRowValid = !this.checkRowForDuplicates(table, row); // valid if there is NOT duplicates
    let isColValid = !this.checkColForDuplicates(table, col); // valid if there is NOT duplicates
    let isSquareValid = !this.checkSquareForDuplicates(table, square); // valid if there is NOT duplicates 
    // console.log('isRowValid? ', isRowValid)
    // console.log('isColValid? ', isColValid)
    // console.log('isSquareValid? ', isSquareValid)

    if (isRowValid && isColValid && isSquareValid){
      // console.log(`Cell at row${row}, col${col} is Valid!!`);
      return true;
    } else {
      // console.log(`Cell at row${row}, col${col} NOT VALID`);
      return false;
    }
  },

  determineValidNumbers(table, row, col){
    let validNumbers = [];
    let testTable = JSON.parse(JSON.stringify(table));
    for(let i = 1; i <= 9; i++){
      testTable[`row${row}`][`col${col}`] = i;
      if (this.isCellValid(testTable, row, col)){
        validNumbers.push(i);
      }
    }
    return validNumbers;
  },

  analyzeVacancies(table){
    let vacancyList = [];
    for (let row =1; row <= 9; row++){
      for (let col = 1; col <= 9; col++){
        let currentCellValue = table[`row${row}`][`col${col}`];
        if (currentCellValue === null){
          // console.log(`Vacancy at: ${row}, col${col}`);
          let newVacancy = {
            row: row,
            col: col,
            possibleValues: this.determineValidNumbers(table, row, col),
            currentValueIndex: 0
          };
          vacancyList.push(newVacancy);          
        }
      }
    }
    let sortedVacancyList = vacancyList.sort(function(a,b){return a.possibleValues.length - b.possibleValues.length});
    // console.log(sortedVacancyList);
    return sortedVacancyList;
  }
}

export default sudokuAnalyzer;