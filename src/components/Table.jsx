import React, { Component } from 'react';
import InputBox from './InputBox.jsx';
import sudokuAnalyzer from './sudokuAnalyzer.js';
import './Table.css';

class Table extends Component {
  constructor(){
    super();
    this.state = {
        table: {
          row1: {
            col1: null,
            col2: null,
            col3: null,
            col4: null,
            col5: null,
            col6: null,
            col7: null,
            col8: null,
            col9: null,
          },
          row2: {
            col1: null,
            col2: null,
            col3: null,
            col4: null,
            col5: null,
            col6: null,
            col7: null,
            col8: null,
            col9: null,
          },
          row3: {
            col1: null,
            col2: null,
            col3: null,
            col4: null,
            col5: null,
            col6: null,
            col7: null,
            col8: null,
            col9: null,
          },
          row4: {
            col1: null,
            col2: null,
            col3: null,
            col4: null,
            col5: null,
            col6: null,
            col7: null,
            col8: null,
            col9: null,
          },
          row5: {
            col1: null,
            col2: null,
            col3: null,
            col4: null,
            col5: null,
            col6: null,
            col7: null,
            col8: null,
            col9: null,
          },
          row6: {
            col1: null,
            col2: null,
            col3: null,
            col4: null,
            col5: null,
            col6: null,
            col7: null,
            col8: null,
            col9: null,
          },
          row7: {
            col1: null,
            col2: null,
            col3: null,
            col4: null,
            col5: null,
            col6: null,
            col7: null,
            col8: null,
            col9: null,
          },
          row8: {
            col1: null,
            col2: null,
            col3: null,
            col4: null,
            col5: null,
            col6: null,
            col7: null,
            col8: null,
            col9: null,
          },
          row9: {
            col1: null,
            col2: null,
            col3: null,
            col4: null,
            col5: null,
            col6: null,
            col7: null,
            col8: null,
            col9: null,
          }
        }, 
        vacancyList: [],
        currentVacancyIndex: 0, 
        highestReachedIndex: 0,
        isComplete: false,
        cellColors: {
          row1: {
            col1: null,
            col2: null,
            col3: null,
            col4: null,
            col5: null,
            col6: null,
            col7: null,
            col8: null,
            col9: null,
          },
          row2: {
            col1: null,
            col2: null,
            col3: null,
            col4: null,
            col5: null,
            col6: null,
            col7: null,
            col8: null,
            col9: null,
          },
          row3: {
            col1: null,
            col2: null,
            col3: null,
            col4: null,
            col5: null,
            col6: null,
            col7: null,
            col8: null,
            col9: null,
          },
          row4: {
            col1: null,
            col2: null,
            col3: null,
            col4: null,
            col5: null,
            col6: null,
            col7: null,
            col8: null,
            col9: null,
          },
          row5: {
            col1: null,
            col2: null,
            col3: null,
            col4: null,
            col5: null,
            col6: null,
            col7: null,
            col8: null,
            col9: null,
          },
          row6: {
            col1: null,
            col2: null,
            col3: null,
            col4: null,
            col5: null,
            col6: null,
            col7: null,
            col8: null,
            col9: null,
          },
          row7: {
            col1: null,
            col2: null,
            col3: null,
            col4: null,
            col5: null,
            col6: null,
            col7: null,
            col8: null,
            col9: null,
          },
          row8: {
            col1: null,
            col2: null,
            col3: null,
            col4: null,
            col5: null,
            col6: null,
            col7: null,
            col8: null,
            col9: null,
          },
          row9: {
            col1: null,
            col2: null,
            col3: null,
            col4: null,
            col5: null,
            col6: null,
            col7: null,
            col8: null,
            col9: null,
          }
        }
    }
    this.changeHandler = this.changeHandler.bind(this);
    this.testValue = this.testValue.bind(this);
    this.solveSudoku = this.solveSudoku.bind(this);
  }

  fillExample1(){
    this.resetCellColor();
    this.setState({
      isComplete: false,
      vacancyList: [],
      currentVacancyIndex: 0,
      table: {
        row1: {
          col1: null,
          col2: null,
          col3: null,
          col4: 2,
          col5: 6,
          col6: null,
          col7: 7,
          col8: null,
          col9: 1,
        },
        row2: {
          col1: 6,
          col2: 8,
          col3: null,
          col4: null,
          col5: 7,
          col6: null,
          col7: null,
          col8: 9,
          col9: null,
        },
        row3: {
          col1: 1,
          col2: 9,
          col3: null,
          col4: null,
          col5: null,
          col6: 4,
          col7: 5,
          col8: null,
          col9: null,
        },
        row4: {
          col1: 8,
          col2: 2,
          col3: null,
          col4: 1,
          col5: null,
          col6: null,
          col7: null,
          col8: 4,
          col9: null,
        },
        row5: {
          col1: null,
          col2: null,
          col3: 4,
          col4: 6,
          col5: null,
          col6: 2,
          col7: 9,
          col8: null,
          col9: null,
        },
        row6: {
          col1: null,
          col2: 5,
          col3: null,
          col4: null,
          col5: null,
          col6: 3,
          col7: null,
          col8: 2,
          col9: 8,
        },
        row7: {
          col1: null,
          col2: null,
          col3: 9,
          col4: 3,
          col5: null,
          col6: null,
          col7: null,
          col8: 7,
          col9: 4,
        },
        row8: {
          col1: null,
          col2: 4,
          col3: null,
          col4: null,
          col5: 5,
          col6: null,
          col7: null,
          col8: 3,
          col9: 6,
        },
        row9: {
          col1: 7,
          col2: null,
          col3: 3,
          col4: null,
          col5: 1,
          col6: 8,
          col7: null,
          col8: null,
          col9: null,
        }
      }
    })
  }

  fillExample2(){
    this.resetCellColor();
    this.setState({
      isComplete: false,
      vacancyList: [],
      currentVacancyIndex: 0,
      table: {
        row1: {
          col1: 2,
          col2: null,
          col3: 4,
          col4: 3,
          col5: null,
          col6: null,
          col7: null,
          col8: null,
          col9: null,
        },
        row2: {
          col1: null,
          col2: null,
          col3: null,
          col4: null,
          col5: 8,
          col6: 2,
          col7: null,
          col8: 9,
          col9: 4,
        },
        row3: {
          col1: 8,
          col2: null,
          col3: 3,
          col4: 9,
          col5: 5,
          col6: null,
          col7: null,
          col8: 2,
          col9: null,
        },
        row4: {
          col1: 9,
          col2: 2,
          col3: null,
          col4: null,
          col5: null,
          col6: null,
          col7: 4,
          col8: 5,
          col9: null,
        },
        row5: {
          col1: 6,
          col2: null,
          col3: null,
          col4: null,
          col5: null,
          col6: null,
          col7: null,
          col8: null,
          col9: 2,
        },
        row6: {
          col1: null,
          col2: 4,
          col3: 1,
          col4: null,
          col5: null,
          col6: null,
          col7: null,
          col8: 8,
          col9: 7,
        },
        row7: {
          col1: null,
          col2: 5,
          col3: null,
          col4: null,
          col5: 6,
          col6: 3,
          col7: 7,
          col8: null,
          col9: 9,
        },
        row8: {
          col1: 1,
          col2: 6,
          col3: null,
          col4: 8,
          col5: 9,
          col6: null,
          col7: null,
          col8: null,
          col9: null,
        },
        row9: {
          col1: null,
          col2: null,
          col3: null,
          col4: null,
          col5: null,
          col6: 1,
          col7: 2,
          col8: null,
          col9: 8,
        }
      }
    })
  }

  clearTable(){
    this.resetCellColor();
    this.setState({
        isComplete: false,
        table: {
        row1: {
          col1: null,
          col2: null,
          col3: null,
          col4: null,
          col5: null,
          col6: null,
          col7: null,
          col8: null,
          col9: null,
        },
        row2: {
          col1: null,
          col2: null,
          col3: null,
          col4: null,
          col5: null,
          col6: null,
          col7: null,
          col8: null,
          col9: null,
        },
        row3: {
          col1: null,
          col2: null,
          col3: null,
          col4: null,
          col5: null,
          col6: null,
          col7: null,
          col8: null,
          col9: null,
        },
        row4: {
          col1: null,
          col2: null,
          col3: null,
          col4: null,
          col5: null,
          col6: null,
          col7: null,
          col8: null,
          col9: null,
        },
        row5: {
          col1: null,
          col2: null,
          col3: null,
          col4: null,
          col5: null,
          col6: null,
          col7: null,
          col8: null,
          col9: null,
        },
        row6: {
          col1: null,
          col2: null,
          col3: null,
          col4: null,
          col5: null,
          col6: null,
          col7: null,
          col8: null,
          col9: null,
        },
        row7: {
          col1: null,
          col2: null,
          col3: null,
          col4: null,
          col5: null,
          col6: null,
          col7: null,
          col8: null,
          col9: null,
        },
        row8: {
          col1: null,
          col2: null,
          col3: null,
          col4: null,
          col5: null,
          col6: null,
          col7: null,
          col8: null,
          col9: null,
        },
        row9: {
          col1: null,
          col2: null,
          col3: null,
          col4: null,
          col5: null,
          col6: null,
          col7: null,
          col8: null,
          col9: null,
        }
      }
    });
  }

  componentWillReceiveProps(newProps){
    if (newProps.fill === 1){
      this.fillExample1();
    } else if (newProps.fill === 2){
      this.fillExample2();
    } else if (newProps.fill === null){
      this.clearTable();
    }
  }

  changeHandler(row, col, newValue){
    this.resetCellColor();
    // console.log(this.state.table[`row${row}`][`col${col}`]);
    if (newValue === ''){newValue = null};
    let table = this.state.table;
    table[`row${row}`][`col${col}`] = newValue;
    this.setState({ table: table, isComplete: false })
  }
  
  testValue(row, col){
    let timeout = 0;
    let vacancyList = this.state.vacancyList; 
    let stopIndex = vacancyList.length - 1; 
    let currentVacancyIndex = this.state.currentVacancyIndex; 
    let currentValueIndex = vacancyList[currentVacancyIndex]['currentValueIndex'];
    let table = this.state.table;
    // console.log(`currentVacancyIndex = ${currentVacancyIndex}, trying value:${table[`row${row}`][`col${col}`]} (index: ${currentValueIndex}) in row:${row}, col:${col}...`);
    // console.log(`   ${table[`row${row}`][`col${col}`]} should equal ${vacancyList[currentVacancyIndex]['possibleValues'][currentValueIndex]}`);

    // FIRST, IF currentValueIndex is out of range, then BACKTRACK:
    if (vacancyList[currentVacancyIndex].currentValueIndex > vacancyList[currentVacancyIndex]['possibleValues'].length - 1){
      // If we are currently on vacancy index 0, then we cannot backtrack any more:
      // console.log('   currentValueIndex out of range, must backtrack!');
      // delete current cell
      table[`row${row}`][`col${col}`] = null;
      // set the currentValueIndex back to 0;
      vacancyList[currentVacancyIndex]['currentValueIndex'] = 0;
      // console.log(`   setting currentValueIndex to zero: currentValueIndex = ${vacancyList[currentVacancyIndex]['currentValueIndex']}`);

      // PREVIOUS VACANCY:
      // decrement currentVacancyIndex (to previous vacancy):
      currentVacancyIndex--;

      if (currentVacancyIndex < 0){
        alert('Unsolvable...');
        return;
      }

      // increment currentValueIndex of previous vacancy:
      vacancyList[currentVacancyIndex]['currentValueIndex'] = vacancyList[currentVacancyIndex]['currentValueIndex'] + 1;
      // set cell in table to new value
      let prevRow = vacancyList[currentVacancyIndex]['row'];
      let prevCol = vacancyList[currentVacancyIndex]['col'];
      let prevCurrentValueIndex = vacancyList[currentVacancyIndex]['currentValueIndex'];

      table[`row${prevRow}`][`col${prevCol}`] = vacancyList[currentVacancyIndex]['possibleValues'][prevCurrentValueIndex];
      
      // console.log('   incrementing prevCurrentValueIndex to ', prevCurrentValueIndex, 'changing cell value to:', table[`row${prevRow}`][`col${prevCol}`]);
      this.setState({
        table: table,
        currentVacancyIndex: currentVacancyIndex,
        vacancyList: vacancyList
      }, ()=>{ setTimeout(()=>{this.testValue(prevRow, prevCol);}, timeout) })
      // console.log(`   backtracking to currentVacancyIndex ${currentVacancyIndex}`);
    }
    // ELSE IF THE CELL IS VALID:
    else if (sudokuAnalyzer.isCellValid(table, row, col)){
      // console.log(`   value ${table[`row${row}`][`col${col}`]} is valid!, moving on to next vacancy...`);
      
      // -------------------------------------------------------
      // if (table[`row${row}`][`col${col}`] === undefined){
      //   console.log('Error: backtracked back to the beginning...');
      //   return;
      // }
      // -----------------------------------------------------
      
      if (currentVacancyIndex < stopIndex){
        // Move on to the NEXT VACANCY
        currentVacancyIndex++;
        let highestReachedIndex = this.state.highestReachedIndex;

        if (currentVacancyIndex > highestReachedIndex){
          highestReachedIndex = currentVacancyIndex;
        }

        let newRow = vacancyList[currentVacancyIndex]['row'];
        let newCol = vacancyList[currentVacancyIndex]['col'];
        currentValueIndex = vacancyList[currentVacancyIndex]['currentValueIndex'];
        table[`row${newRow}`][`col${newCol}`] = vacancyList[currentVacancyIndex]['possibleValues'][currentValueIndex];
        // console.log('about to write to state:');
        // console.log('  table:', table);
        // console.log('  vacancyList:', JSON.parse(JSON.stringify(vacancyList)));
        // console.log('  currentVacancyIndex:', currentVacancyIndex);
        this.setState({
          currentVacancyIndex: currentVacancyIndex,
          table: table,
          highestReachedIndex: highestReachedIndex
        }, ()=>{ setTimeout(()=>{this.testValue(newRow, newCol)}, timeout) });

      } else if (this.state.currentVacancyIndex === stopIndex){
        this.setState({ isComplete: true, vacancyList: [] });
        console.log('DONE!!!')
      } else {
        console.log('Error....currentVacancyIndex somehow exceeded stopIndex')
      }
    }
    // ELSE IF THE CELL IS NOT VALID 
    else {
      // console.log(`   ${table[`row${row}`][`col${col}`]} is invalid`);
      // console.log('   trying the next value in possibleValues');
      currentValueIndex = vacancyList[currentVacancyIndex]['currentValueIndex'] + 1;
      table[`row${row}`][`col${col}`] = vacancyList[currentVacancyIndex]['possibleValues'][currentValueIndex];
      vacancyList[currentVacancyIndex]['currentValueIndex'] = currentValueIndex;
      // console.log('about to write to state:');
      // console.log('  table:', table);
      // console.log('  vacancyList:', JSON.parse(JSON.stringify(vacancyList)));
      // console.log('  currentVacancyIndex:', currentVacancyIndex);
      this.setState({ table: table, vacancyList: vacancyList }, ()=>{ setTimeout(()=>{this.testValue(row, col)}, timeout) });
    }
  }

  solveSudoku(table){
    // if sudoku is already solved:
    if (this.state.isComplete){
      return;
    }

    

    let vacancyList = sudokuAnalyzer.analyzeVacancies(this.state.table);
    // Start by putting the first possible value into the first vacancy, and then test with testValue function
    let row = vacancyList[0]['row'];
    let col = vacancyList[0]['col'];
    table[`row${row}`][`col${col}`] = vacancyList[0]['possibleValues'][0];
    this.setState({
      vacancyList: vacancyList,
      table: table,
      currentVacancyIndex: 0,
      highestReachedIndex: 0,
      cellColors: this.setVacantCellColor(vacancyList)
    }, ()=>{ this.testValue(row, col) });
  }


  setVacantCellColor(vacancyList){
    // vacancyList = sudokuAnalyzer.analyzeVacancies(this.state.table);
    let cellColors = this.state.cellColors;
    // run this when first clicking solve
    // Set all fixed numbers to black
    // set all changing numbers to blue
    // console.log('vacancyList =', vacancyList);
    // console.log('cellColors =', cellColors);
    for (let index in vacancyList){
      // console.log(`vacancyList[${index}]: row${vacancyList[index]['row']}, col${vacancyList[index]['col']}`)
      cellColors[`row${vacancyList[index]['row']}`][`col${vacancyList[index]['col']}`] = 'blue';
    }
    return cellColors;
  }

  resetCellColor(){
    this.setState({
      cellColors: {
        row1: {
          col1: null,
          col2: null,
          col3: null,
          col4: null,
          col5: null,
          col6: null,
          col7: null,
          col8: null,
          col9: null,
        },
        row2: {
          col1: null,
          col2: null,
          col3: null,
          col4: null,
          col5: null,
          col6: null,
          col7: null,
          col8: null,
          col9: null,
        },
        row3: {
          col1: null,
          col2: null,
          col3: null,
          col4: null,
          col5: null,
          col6: null,
          col7: null,
          col8: null,
          col9: null,
        },
        row4: {
          col1: null,
          col2: null,
          col3: null,
          col4: null,
          col5: null,
          col6: null,
          col7: null,
          col8: null,
          col9: null,
        },
        row5: {
          col1: null,
          col2: null,
          col3: null,
          col4: null,
          col5: null,
          col6: null,
          col7: null,
          col8: null,
          col9: null,
        },
        row6: {
          col1: null,
          col2: null,
          col3: null,
          col4: null,
          col5: null,
          col6: null,
          col7: null,
          col8: null,
          col9: null,
        },
        row7: {
          col1: null,
          col2: null,
          col3: null,
          col4: null,
          col5: null,
          col6: null,
          col7: null,
          col8: null,
          col9: null,
        },
        row8: {
          col1: null,
          col2: null,
          col3: null,
          col4: null,
          col5: null,
          col6: null,
          col7: null,
          col8: null,
          col9: null,
        },
        row9: {
          col1: null,
          col2: null,
          col3: null,
          col4: null,
          col5: null,
          col6: null,
          col7: null,
          col8: null,
          col9: null,
        }
      }
    })
  }

  render() {
    let tableClass = 'sudokuTable';    
    if (this.state.isComplete){
      tableClass = 'sudokuTable-complete';
    }

    return (
      <div className="Table">
        <table className={tableClass}>
          <tbody>
          <tr> 
            <td className='top-edge-bold left-edge-bold'><InputBox textColor={this.state.cellColors.row1.col1} number={this.state.table.row1.col1}  changeHandler={(newValue)=>{this.changeHandler(1,1,newValue)}} /></td>
            <td className='top-edge-bold'><InputBox textColor={this.state.cellColors.row1.col2} number={this.state.table.row1.col2} changeHandler={(newValue)=>{this.changeHandler(1,2,newValue)}} /></td>
            <td className='top-edge-bold right-edge-bold' ><InputBox textColor={this.state.cellColors.row1.col3} number={this.state.table.row1.col3} changeHandler={(newValue)=>{this.changeHandler(1,3,newValue)}} /></td>
            <td className='top-edge-bold left-edge-bold' ><InputBox textColor={this.state.cellColors.row1.col4} number={this.state.table.row1.col4} changeHandler={(newValue)=>{this.changeHandler(1,4,newValue)}} /></td>
            <td className='top-edge-bold'><InputBox textColor={this.state.cellColors.row1.col5} number={this.state.table.row1.col5} changeHandler={(newValue)=>{this.changeHandler(1,5,newValue)}} /></td>
            <td className='top-edge-bold right-edge-bold' ><InputBox textColor={this.state.cellColors.row1.col6} number={this.state.table.row1.col6} changeHandler={(newValue)=>{this.changeHandler(1,6,newValue)}} /></td>
            <td className='top-edge-bold left-edge-bold' ><InputBox textColor={this.state.cellColors.row1.col7} number={this.state.table.row1.col7} changeHandler={(newValue)=>{this.changeHandler(1,7,newValue)}} /></td>
            <td className='top-edge-bold'><InputBox textColor={this.state.cellColors.row1.col8} number={this.state.table.row1.col8} changeHandler={(newValue)=>{this.changeHandler(1,8,newValue)}} /></td>
            <td className='top-edge-bold right-edge-bold'><InputBox textColor={this.state.cellColors.row1.col9} number={this.state.table.row1.col9} changeHandler={(newValue)=>{this.changeHandler(1,9,newValue)}} /></td>
          </tr>
          <tr>
            <td className='left-edge-bold'><InputBox textColor={this.state.cellColors.row2.col1} number={this.state.table.row2.col1} changeHandler={(newValue)=>{this.changeHandler(2,1,newValue)}} /></td>
            <td><InputBox textColor={this.state.cellColors.row2.col2} number={this.state.table.row2.col2} changeHandler={(newValue)=>{this.changeHandler(2,2,newValue)}} /></td>
            <td className='right-edge-bold' ><InputBox textColor={this.state.cellColors.row2.col3} number={this.state.table.row2.col3} changeHandler={(newValue)=>{this.changeHandler(2,3,newValue)}} /></td>
            <td className='left-edge-bold' ><InputBox textColor={this.state.cellColors.row2.col4} number={this.state.table.row2.col4} changeHandler={(newValue)=>{this.changeHandler(2,4,newValue)}} /></td>
            <td><InputBox textColor={this.state.cellColors.row2.col5} number={this.state.table.row2.col5} changeHandler={(newValue)=>{this.changeHandler(2,5,newValue)}} /></td>
            <td className='right-edge-bold' ><InputBox textColor={this.state.cellColors.row2.col6} number={this.state.table.row2.col6} changeHandler={(newValue)=>{this.changeHandler(2,6,newValue)}} /></td>
            <td className='left-edge-bold' ><InputBox textColor={this.state.cellColors.row2.col7} number={this.state.table.row2.col7} changeHandler={(newValue)=>{this.changeHandler(2,7,newValue)}} /></td>
            <td><InputBox textColor={this.state.cellColors.row2.col8} number={this.state.table.row2.col8} changeHandler={(newValue)=>{this.changeHandler(2,8,newValue)}} /></td>
            <td className='right-edge-bold'><InputBox textColor={this.state.cellColors.row2.col9} number={this.state.table.row2.col9} changeHandler={(newValue)=>{this.changeHandler(2,9,newValue)}} /></td>
          </tr>
          <tr>
            <td className='bottom-edge-bold left-edge-bold'><InputBox textColor={this.state.cellColors.row3.col1} number={this.state.table.row3.col1} changeHandler={(newValue)=>{this.changeHandler(3,1,newValue)}} /></td>
            <td className='bottom-edge-bold'><InputBox textColor={this.state.cellColors.row3.col2} number={this.state.table.row3.col2} changeHandler={(newValue)=>{this.changeHandler(3,2,newValue)}} /></td>
            <td className='bottom-edge-bold right-edge-bold'><InputBox textColor={this.state.cellColors.row3.col3} number={this.state.table.row3.col3} changeHandler={(newValue)=>{this.changeHandler(3,3,newValue)}} /></td>
            <td className='bottom-edge-bold left-edge-bold'><InputBox textColor={this.state.cellColors.row3.col4} number={this.state.table.row3.col4} changeHandler={(newValue)=>{this.changeHandler(3,4,newValue)}} /></td>
            <td className='bottom-edge-bold'><InputBox textColor={this.state.cellColors.row3.col5} number={this.state.table.row3.col5} changeHandler={(newValue)=>{this.changeHandler(3,5,newValue)}} /></td>
            <td className='bottom-edge-bold right-edge-bold'><InputBox textColor={this.state.cellColors.row3.col6} number={this.state.table.row3.col6} changeHandler={(newValue)=>{this.changeHandler(3,6,newValue)}} /></td>
            <td className='bottom-edge-bold left-edge-bold'><InputBox textColor={this.state.cellColors.row3.col7} number={this.state.table.row3.col7} changeHandler={(newValue)=>{this.changeHandler(3,7,newValue)}} /></td>
            <td className='bottom-edge-bold'><InputBox textColor={this.state.cellColors.row3.col8} number={this.state.table.row3.col8} changeHandler={(newValue)=>{this.changeHandler(3,8,newValue)}} /></td>
            <td className='bottom-edge-bold right-edge-bold'><InputBox textColor={this.state.cellColors.row3.col9} number={this.state.table.row3.col9} changeHandler={(newValue)=>{this.changeHandler(3,9,newValue)}} /></td>
          </tr>
          <tr>
            <td className='top-edge-bold left-edge-bold' ><InputBox textColor={this.state.cellColors.row4.col1} number={this.state.table.row4.col1} changeHandler={(newValue)=>{this.changeHandler(4,1,newValue)}} /></td>
            <td className='top-edge-bold' ><InputBox textColor={this.state.cellColors.row4.col2} number={this.state.table.row4.col2} changeHandler={(newValue)=>{this.changeHandler(4,2,newValue)}} /></td>
            <td className='top-edge-bold right-edge-bold' ><InputBox textColor={this.state.cellColors.row4.col3} number={this.state.table.row4.col3} changeHandler={(newValue)=>{this.changeHandler(4,3,newValue)}} /></td>
            <td className='top-edge-bold left-edge-bold' ><InputBox textColor={this.state.cellColors.row4.col4} number={this.state.table.row4.col4} changeHandler={(newValue)=>{this.changeHandler(4,4,newValue)}} /></td>
            <td className='top-edge-bold' ><InputBox textColor={this.state.cellColors.row4.col5} number={this.state.table.row4.col5} changeHandler={(newValue)=>{this.changeHandler(4,5,newValue)}} /></td>
            <td className='top-edge-bold right-edge-bold' ><InputBox textColor={this.state.cellColors.row4.col6} number={this.state.table.row4.col6} changeHandler={(newValue)=>{this.changeHandler(4,6,newValue)}} /></td>
            <td className='top-edge-bold left-edge-bold' ><InputBox textColor={this.state.cellColors.row4.col7} number={this.state.table.row4.col7} changeHandler={(newValue)=>{this.changeHandler(4,7,newValue)}} /></td>
            <td className='top-edge-bold' ><InputBox textColor={this.state.cellColors.row4.col8} number={this.state.table.row4.col8} changeHandler={(newValue)=>{this.changeHandler(4,8,newValue)}} /></td>
            <td className='top-edge-bold right-edge-bold' ><InputBox textColor={this.state.cellColors.row4.col9} number={this.state.table.row4.col9} changeHandler={(newValue)=>{this.changeHandler(4,9,newValue)}} /></td>
          </tr>
          <tr>
            <td className='left-edge-bold'><InputBox textColor={this.state.cellColors.row5.col1} number={this.state.table.row5.col1} changeHandler={(newValue)=>{this.changeHandler(5,1,newValue)}} /></td>
            <td><InputBox textColor={this.state.cellColors.row5.col2} number={this.state.table.row5.col2} changeHandler={(newValue)=>{this.changeHandler(5,2,newValue)}} /></td>
            <td className='right-edge-bold' ><InputBox textColor={this.state.cellColors.row5.col3} number={this.state.table.row5.col3} changeHandler={(newValue)=>{this.changeHandler(5,3,newValue)}} /></td>
            <td className='left-edge-bold' ><InputBox textColor={this.state.cellColors.row5.col4} number={this.state.table.row5.col4} changeHandler={(newValue)=>{this.changeHandler(5,4,newValue)}} /></td>
            <td><InputBox textColor={this.state.cellColors.row5.col5} number={this.state.table.row5.col5} changeHandler={(newValue)=>{this.changeHandler(5,5,newValue)}} /></td>
            <td className='right-edge-bold' ><InputBox textColor={this.state.cellColors.row5.col6} number={this.state.table.row5.col6} changeHandler={(newValue)=>{this.changeHandler(5,6,newValue)}} /></td>
            <td className='left-edge-bold' ><InputBox textColor={this.state.cellColors.row5.col7} number={this.state.table.row5.col7} changeHandler={(newValue)=>{this.changeHandler(5,7,newValue)}} /></td>
            <td><InputBox textColor={this.state.cellColors.row5.col8} number={this.state.table.row5.col8} changeHandler={(newValue)=>{this.changeHandler(5,8,newValue)}} /></td>
            <td className='right-edge-bold'><InputBox textColor={this.state.cellColors.row5.col9} number={this.state.table.row5.col9} changeHandler={(newValue)=>{this.changeHandler(5,9,newValue)}} /></td>
          </tr>
          <tr>
            <td className='bottom-edge-bold left-edge-bold' ><InputBox textColor={this.state.cellColors.row6.col1} number={this.state.table.row6.col1} changeHandler={(newValue)=>{this.changeHandler(6,1,newValue)}} /></td>
            <td className='bottom-edge-bold' ><InputBox textColor={this.state.cellColors.row6.col2} number={this.state.table.row6.col2} changeHandler={(newValue)=>{this.changeHandler(6,2,newValue)}} /></td>
            <td className='bottom-edge-bold right-edge-bold' ><InputBox textColor={this.state.cellColors.row6.col3} number={this.state.table.row6.col3} changeHandler={(newValue)=>{this.changeHandler(6,3,newValue)}} /></td>
            <td className='bottom-edge-bold left-edge-bold' ><InputBox textColor={this.state.cellColors.row6.col4} number={this.state.table.row6.col4} changeHandler={(newValue)=>{this.changeHandler(6,4,newValue)}} /></td>
            <td className='bottom-edge-bold' ><InputBox textColor={this.state.cellColors.row6.col5} number={this.state.table.row6.col5} changeHandler={(newValue)=>{this.changeHandler(6,5,newValue)}} /></td>
            <td className='bottom-edge-bold right-edge-bold' ><InputBox textColor={this.state.cellColors.row6.col6} number={this.state.table.row6.col6} changeHandler={(newValue)=>{this.changeHandler(6,6,newValue)}} /></td>
            <td className='bottom-edge-bold left-edge-bold' ><InputBox textColor={this.state.cellColors.row6.col7} number={this.state.table.row6.col7} changeHandler={(newValue)=>{this.changeHandler(6,7,newValue)}} /></td>
            <td className='bottom-edge-bold' ><InputBox textColor={this.state.cellColors.row6.col8} number={this.state.table.row6.col8} changeHandler={(newValue)=>{this.changeHandler(6,8,newValue)}} /></td>
            <td className='bottom-edge-bold right-edge-bold' ><InputBox textColor={this.state.cellColors.row6.col9} number={this.state.table.row6.col9} changeHandler={(newValue)=>{this.changeHandler(6,9,newValue)}} /></td>
          </tr>
          <tr>
            <td className='top-edge-bold left-edge-bold' ><InputBox textColor={this.state.cellColors.row7.col1} number={this.state.table.row7.col1} changeHandler={(newValue)=>{this.changeHandler(7,1,newValue)}} /></td>
            <td className='top-edge-bold' ><InputBox textColor={this.state.cellColors.row7.col2} number={this.state.table.row7.col2} changeHandler={(newValue)=>{this.changeHandler(7,2,newValue)}} /></td>
            <td className='top-edge-bold right-edge-bold' ><InputBox textColor={this.state.cellColors.row7.col3} number={this.state.table.row7.col3} changeHandler={(newValue)=>{this.changeHandler(7,3,newValue)}} /></td>
            <td className='top-edge-bold left-edge-bold' ><InputBox textColor={this.state.cellColors.row7.col4} number={this.state.table.row7.col4} changeHandler={(newValue)=>{this.changeHandler(7,4,newValue)}} /></td>
            <td className='top-edge-bold' ><InputBox textColor={this.state.cellColors.row7.col5} number={this.state.table.row7.col5} changeHandler={(newValue)=>{this.changeHandler(7,5,newValue)}} /></td>
            <td className='top-edge-bold right-edge-bold' ><InputBox textColor={this.state.cellColors.row7.col6} number={this.state.table.row7.col6} changeHandler={(newValue)=>{this.changeHandler(7,6,newValue)}} /></td>
            <td className='top-edge-bold left-edge-bold' ><InputBox textColor={this.state.cellColors.row7.col7} number={this.state.table.row7.col7} changeHandler={(newValue)=>{this.changeHandler(7,7,newValue)}} /></td>
            <td className='top-edge-bold' ><InputBox textColor={this.state.cellColors.row7.col8} number={this.state.table.row7.col8} changeHandler={(newValue)=>{this.changeHandler(7,8,newValue)}} /></td>
            <td className='top-edge-bold right-edge-bold' ><InputBox textColor={this.state.cellColors.row7.col9} number={this.state.table.row7.col9} changeHandler={(newValue)=>{this.changeHandler(7,9,newValue)}} /></td>
          </tr>
          <tr>
            <td className='left-edge-bold'><InputBox textColor={this.state.cellColors.row8.col1} number={this.state.table.row8.col1} changeHandler={(newValue)=>{this.changeHandler(8,1,newValue)}} /></td>
            <td><InputBox textColor={this.state.cellColors.row8.col2} number={this.state.table.row8.col2} changeHandler={(newValue)=>{this.changeHandler(8,2,newValue)}} /></td>
            <td className='right-edge-bold' ><InputBox textColor={this.state.cellColors.row8.col3} number={this.state.table.row8.col3} changeHandler={(newValue)=>{this.changeHandler(8,3,newValue)}} /></td>
            <td className='left-edge-bold' ><InputBox textColor={this.state.cellColors.row8.col4} number={this.state.table.row8.col4} changeHandler={(newValue)=>{this.changeHandler(8,4,newValue)}} /></td>
            <td><InputBox textColor={this.state.cellColors.row8.col5} number={this.state.table.row8.col5} changeHandler={(newValue)=>{this.changeHandler(8,5,newValue)}} /></td>
            <td className='right-edge-bold' ><InputBox textColor={this.state.cellColors.row8.col6} number={this.state.table.row8.col6} changeHandler={(newValue)=>{this.changeHandler(8,6,newValue)}} /></td>
            <td className='left-edge-bold' ><InputBox textColor={this.state.cellColors.row8.col7} number={this.state.table.row8.col7} changeHandler={(newValue)=>{this.changeHandler(8,7,newValue)}} /></td>
            <td><InputBox textColor={this.state.cellColors.row8.col8} number={this.state.table.row8.col8} changeHandler={(newValue)=>{this.changeHandler(8,8,newValue)}} /></td>
            <td className='right-edge-bold'><InputBox textColor={this.state.cellColors.row8.col9} number={this.state.table.row8.col9} changeHandler={(newValue)=>{this.changeHandler(8,9,newValue)}} /></td>
          </tr>
          <tr>
            <td className='left-edge-bold bottom-edge-bold'><InputBox textColor={this.state.cellColors.row9.col1} number={this.state.table.row9.col1} changeHandler={(newValue)=>{this.changeHandler(9,1,newValue)}} /></td>
            <td className='bottom-edge-bold'><InputBox textColor={this.state.cellColors.row9.col2} number={this.state.table.row9.col2} changeHandler={(newValue)=>{this.changeHandler(9,2,newValue)}} /></td>
            <td className='right-edge-bold bottom-edge-bold' ><InputBox textColor={this.state.cellColors.row9.col3} number={this.state.table.row9.col3} changeHandler={(newValue)=>{this.changeHandler(9,3,newValue)}} /></td>
            <td className='left-edge-bold bottom-edge-bold' ><InputBox textColor={this.state.cellColors.row9.col4} number={this.state.table.row9.col4} changeHandler={(newValue)=>{this.changeHandler(9,4,newValue)}} /></td>
            <td className='bottom-edge-bold'><InputBox textColor={this.state.cellColors.row9.col5} number={this.state.table.row9.col5} changeHandler={(newValue)=>{this.changeHandler(9,5,newValue)}} /></td>
            <td className='right-edge-bold bottom-edge-bold' ><InputBox textColor={this.state.cellColors.row9.col6} number={this.state.table.row9.col6} changeHandler={(newValue)=>{this.changeHandler(9,6,newValue)}} /></td>
            <td className='left-edge-bold bottom-edge-bold' ><InputBox textColor={this.state.cellColors.row9.col7} number={this.state.table.row9.col7} changeHandler={(newValue)=>{this.changeHandler(9,7,newValue)}} /></td>
            <td className='bottom-edge-bold'><InputBox textColor={this.state.cellColors.row9.col8} number={this.state.table.row9.col8} changeHandler={(newValue)=>{this.changeHandler(9,8,newValue)}} /></td>
            <td className='right-edge-bold bottom-edge-bold'><InputBox textColor={this.state.cellColors.row9.col9} number={this.state.table.row9.col9} changeHandler={(newValue)=>{this.changeHandler(9,9,newValue)}} /></td>
          </tr>
          </tbody>
          </table>
        <button id='solve-button' onClick={()=>{this.solveSudoku(this.state.table)}} >Solve!!</button>
      </div>
    );
  }
}

export default Table;
