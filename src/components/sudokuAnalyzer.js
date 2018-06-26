module.exports = {

  checkRowForDuplicates: function(table, rowNumber){
    let numbersInRow = {};
    for (let i = 1; i <=9; i++){
      let currentCellValue = table[`row${rowNumber}`][`col${i}`];
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
    for (let i = 1; i <=9; i++){
      let currentCellValue = table[`row${i}`][`col${colNumber}`];
      if (!numbersInCol[currentCellValue] && currentCellValue !== null){
        numbersInCol[currentCellValue] = true;
      } else if (currentCellValue !== null){
        numbersInCol[currentCellValue] = 'multiples!!';
        return true;
      }
    }
    // console.log(numbersInCol);
    return false;
  }

}