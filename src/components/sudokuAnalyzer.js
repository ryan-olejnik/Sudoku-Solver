module.exports = {

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
        console.log('Checking Square A');
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
        console.log('Checking Square B');
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
        console.log('Checking Square C');
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
        console.log('Checking Square D');
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
        console.log('Checking Square E');
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
        console.log('Checking Square F');
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
        console.log('Checking Square G');
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
        console.log('Checking Square H');
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
        console.log('Checking Square I');
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
    return true;
  }


}