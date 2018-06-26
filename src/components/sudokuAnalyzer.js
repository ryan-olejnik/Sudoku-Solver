module.exports = {

  checkRowForDuplicates: function(table, rowNumber){
    let numbersInRow = {};

    for (let i = 1; i <=9; i++){
      let currentCellNumber = table[`row${rowNumber}`][`col${i}`];
      console.log(currentCellNumber)

      if (numbersInRow[currentCellNumber]){
        alert('found duplicate!!');
        return true;
      } else if (currentCellNumber){
        numbersInRow[table[currentCellNumber]] = true;
      }
    }
      alert(`No duplicates in row ${rowNumber}`);
      return false;

  },

  checkColForDuplicates: function(colNumber){
    alert('check Col for dupes')
  }

}