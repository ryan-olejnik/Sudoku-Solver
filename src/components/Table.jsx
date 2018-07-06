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
        vacancyList: [], // (sorted)
        currentVacancyIndex: 0, 
        highestReachedIndex: 0,
        isComplete: false
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.testValue = this.testValue.bind(this);
    this.solveSudoku = this.solveSudoku.bind(this);
  }

  fillEasyExample(){
    this.setState({
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

  fillHardExample(){
    this.setState({
        table: {
          row1: {
            col1: 8,
            col2: null,
            col3: 4,
            col4: null,
            col5: 1,
            col6: 3,
            col7: null,
            col8: null,
            col9: 9,
          },
          row2: {
            col1: 7,
            col2: null,
            col3: null,
            col4: null,
            col5: null,
            col6: 8,
            col7: 1,
            col8: 5,
            col9: null,
          },
          row3: {
            col1: 9,
            col2: 1,
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
            col5: 2,
            col6: null,
            col7: null,
            col8: null,
            col9: null,
          },
          row5: {
            col1: 4,
            col2: 7,
            col3: null,
            col4: null,
            col5: null,
            col6: null,
            col7: null,
            col8: 8,
            col9: 1,
          },
          row6: {
            col1: null,
            col2: null,
            col3: null,
            col4: null,
            col5: 8,
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
            col8: 1,
            col9: 2,
          },
          row8: {
            col1: null,
            col2: 5,
            col3: 9,
            col4: 1,
            col5: null,
            col6: null,
            col7: null,
            col8: null,
            col9: 3,
          },
          row9: {
            col1: 1,
            col2: null,
            col3: null,
            col4: 2,
            col5: 7,
            col6: null,
            col7: 9,
            col8: null,
            col9: 6,
          }
        }
    })
  }

  clearTable(){
    this.setState({
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
    if (newProps.fill === 'easy'){
      this.fillEasyExample();
    } else if (newProps.fill === 'hard'){
      this.fillHardExample();
    } else if (newProps.fill === null){
      this.clearTable();
    }
  }

  changeHandler(row, col, newValue){
    // console.log(this.state.table[`row${row}`][`col${col}`]);
    if (newValue === ''){newValue = null};
    let table = this.state.table;
    table[`row${row}`][`col${col}`] = newValue;
    this.setState({ table: table })
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
    if (vacancyList[currentVacancyIndex].currentValueIndex > vacancyList[currentValueIndex]['possibleValues'].length - 1){
      // console.log('   currentValueIndex out of range, must backtrack!');
      // delete current cell
      table[`row${row}`][`col${col}`] = null;
      // set the currentValueIndex back to 0;
      vacancyList[currentVacancyIndex]['currentValueIndex'] = 0;
      // console.log(`   setting currentValueIndex to zero: currentValueIndex = ${vacancyList[currentVacancyIndex]['currentValueIndex']}`);

      // PREVIOUS VACANCY:
      // decrement currentVacancyIndex (to previous vacancy):
      currentVacancyIndex--;
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
      if (table[`row${row}`][`col${col}`] === undefined){
        // console.log('Error: backtracked back to the beginning...');
        // console.log('currentVacancyIndex =', currentVacancyIndex);
        // console.log('vacancyList=', vacancyList);
        // console.log('table: ', table);
        // console.log('this.state: ', this.state);
        return;
      }
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

        // debugger;
        this.setState({
          currentVacancyIndex: currentVacancyIndex,
          table: table,
          highestReachedIndex: highestReachedIndex
        }, ()=>{ setTimeout(()=>{this.testValue(newRow, newCol)}, timeout) });

      } else if (this.state.currentVacancyIndex === stopIndex){
        this.setState({ isComplete: true });
        console.log('DONE!!!')
      } else {
        // console.log('Error....currentVacancyIndex somehow exceeded stopIndex')
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
      // console.log('  vacancyList:', vacancyList);
      // console.log('  currentVacancyIndex:', currentVacancyIndex);
      // debugger;
      this.setState({ table: table, vacancyList: vacancyList }, ()=>{ setTimeout(()=>{this.testValue(row, col)}, timeout) });
    }
  }

  solveSudoku(table){
    let vacancyList = sudokuAnalyzer.analyzeVacancies(this.state.table);
    // Start by putting the first possible value into the first vacancy, and then test with testValue function
    let row = vacancyList[0]['row'];
    let col = vacancyList[0]['col'];
    table[`row${row}`][`col${col}`] = vacancyList[0]['possibleValues'][0];

    this.setState({
      vacancyList: vacancyList,
      table: table
    }, ()=>{ setTimeout(()=>{this.testValue(row, col)}, 100) });
  }


  setStartStyle(){
    // run this when first clicking solve
    // Set all fixed numbers to black
    // set all changing numbers to blue
  }

  setFinishStye(){
    // set all values to Green
  }

  render() {
    let tableClassName = 'sudokuTable';
    if (this.state.isComplete){
      tableClassName = 'sudokuTable-complete';
    }

    return (
      <div className="Table">
        <table className={tableClassName}>
          <tbody>
          <tr> 
            <td className='top-edge-bold left-edge-bold'><InputBox number={this.state.table.row1.col1}  changeHandler={(newValue)=>{this.changeHandler(1,1,newValue)}} /></td>
            <td className='top-edge-bold'><InputBox number={this.state.table.row1.col2} changeHandler={(newValue)=>{this.changeHandler(1,2,newValue)}} /></td>
            <td className='top-edge-bold right-edge-bold' ><InputBox number={this.state.table.row1.col3} changeHandler={(newValue)=>{this.changeHandler(1,3,newValue)}} /></td>
            <td className='top-edge-bold left-edge-bold' ><InputBox number={this.state.table.row1.col4} changeHandler={(newValue)=>{this.changeHandler(1,4,newValue)}} /></td>
            <td className='top-edge-bold'><InputBox number={this.state.table.row1.col5} changeHandler={(newValue)=>{this.changeHandler(1,5,newValue)}} /></td>
            <td className='top-edge-bold right-edge-bold' ><InputBox number={this.state.table.row1.col6} changeHandler={(newValue)=>{this.changeHandler(1,6,newValue)}} /></td>
            <td className='top-edge-bold left-edge-bold' ><InputBox number={this.state.table.row1.col7} changeHandler={(newValue)=>{this.changeHandler(1,7,newValue)}} /></td>
            <td className='top-edge-bold'><InputBox number={this.state.table.row1.col8} changeHandler={(newValue)=>{this.changeHandler(1,8,newValue)}} /></td>
            <td className='top-edge-bold right-edge-bold'><InputBox number={this.state.table.row1.col9} changeHandler={(newValue)=>{this.changeHandler(1,9,newValue)}} /></td>
          </tr>
          <tr>
            <td className='left-edge-bold'><InputBox number={this.state.table.row2.col1} changeHandler={(newValue)=>{this.changeHandler(2,1,newValue)}} /></td>
            <td><InputBox number={this.state.table.row2.col2} changeHandler={(newValue)=>{this.changeHandler(2,2,newValue)}} /></td>
            <td className='right-edge-bold' ><InputBox number={this.state.table.row2.col3} changeHandler={(newValue)=>{this.changeHandler(2,3,newValue)}} /></td>
            <td className='left-edge-bold' ><InputBox number={this.state.table.row2.col4} changeHandler={(newValue)=>{this.changeHandler(2,4,newValue)}} /></td>
            <td><InputBox number={this.state.table.row2.col5} changeHandler={(newValue)=>{this.changeHandler(2,5,newValue)}} /></td>
            <td className='right-edge-bold' ><InputBox number={this.state.table.row2.col6} changeHandler={(newValue)=>{this.changeHandler(2,6,newValue)}} /></td>
            <td className='left-edge-bold' ><InputBox number={this.state.table.row2.col7} changeHandler={(newValue)=>{this.changeHandler(2,7,newValue)}} /></td>
            <td><InputBox number={this.state.table.row2.col8} changeHandler={(newValue)=>{this.changeHandler(2,8,newValue)}} /></td>
            <td className='right-edge-bold'><InputBox number={this.state.table.row2.col9} changeHandler={(newValue)=>{this.changeHandler(2,9,newValue)}} /></td>
          </tr>
          <tr>
            <td className='bottom-edge-bold left-edge-bold'><InputBox number={this.state.table.row3.col1} changeHandler={(newValue)=>{this.changeHandler(3,1,newValue)}} /></td>
            <td className='bottom-edge-bold'><InputBox number={this.state.table.row3.col2} changeHandler={(newValue)=>{this.changeHandler(3,2,newValue)}} /></td>
            <td className='bottom-edge-bold right-edge-bold'><InputBox number={this.state.table.row3.col3} changeHandler={(newValue)=>{this.changeHandler(3,3,newValue)}} /></td>
            <td className='bottom-edge-bold left-edge-bold'><InputBox number={this.state.table.row3.col4} changeHandler={(newValue)=>{this.changeHandler(3,4,newValue)}} /></td>
            <td className='bottom-edge-bold'><InputBox number={this.state.table.row3.col5} changeHandler={(newValue)=>{this.changeHandler(3,5,newValue)}} /></td>
            <td className='bottom-edge-bold right-edge-bold'><InputBox number={this.state.table.row3.col6} changeHandler={(newValue)=>{this.changeHandler(3,6,newValue)}} /></td>
            <td className='bottom-edge-bold left-edge-bold'><InputBox number={this.state.table.row3.col7} changeHandler={(newValue)=>{this.changeHandler(3,7,newValue)}} /></td>
            <td className='bottom-edge-bold'><InputBox number={this.state.table.row3.col8} changeHandler={(newValue)=>{this.changeHandler(3,8,newValue)}} /></td>
            <td className='bottom-edge-bold right-edge-bold'><InputBox number={this.state.table.row3.col9} changeHandler={(newValue)=>{this.changeHandler(3,9,newValue)}} /></td>
          </tr>
          <tr>
            <td className='top-edge-bold left-edge-bold' ><InputBox number={this.state.table.row4.col1} changeHandler={(newValue)=>{this.changeHandler(4,1,newValue)}} /></td>
            <td className='top-edge-bold' ><InputBox number={this.state.table.row4.col2} changeHandler={(newValue)=>{this.changeHandler(4,2,newValue)}} /></td>
            <td className='top-edge-bold right-edge-bold' ><InputBox number={this.state.table.row4.col3} changeHandler={(newValue)=>{this.changeHandler(4,3,newValue)}} /></td>
            <td className='top-edge-bold left-edge-bold' ><InputBox number={this.state.table.row4.col4} changeHandler={(newValue)=>{this.changeHandler(4,4,newValue)}} /></td>
            <td className='top-edge-bold' ><InputBox number={this.state.table.row4.col5} changeHandler={(newValue)=>{this.changeHandler(4,5,newValue)}} /></td>
            <td className='top-edge-bold right-edge-bold' ><InputBox number={this.state.table.row4.col6} changeHandler={(newValue)=>{this.changeHandler(4,6,newValue)}} /></td>
            <td className='top-edge-bold left-edge-bold' ><InputBox number={this.state.table.row4.col7} changeHandler={(newValue)=>{this.changeHandler(4,7,newValue)}} /></td>
            <td className='top-edge-bold' ><InputBox number={this.state.table.row4.col8} changeHandler={(newValue)=>{this.changeHandler(4,8,newValue)}} /></td>
            <td className='top-edge-bold right-edge-bold' ><InputBox number={this.state.table.row4.col9} changeHandler={(newValue)=>{this.changeHandler(4,9,newValue)}} /></td>
          </tr>
          <tr>
            <td className='left-edge-bold'><InputBox number={this.state.table.row5.col1} changeHandler={(newValue)=>{this.changeHandler(5,1,newValue)}} /></td>
            <td><InputBox number={this.state.table.row5.col2} changeHandler={(newValue)=>{this.changeHandler(5,2,newValue)}} /></td>
            <td className='right-edge-bold' ><InputBox number={this.state.table.row5.col3} changeHandler={(newValue)=>{this.changeHandler(5,3,newValue)}} /></td>
            <td className='left-edge-bold' ><InputBox number={this.state.table.row5.col4} changeHandler={(newValue)=>{this.changeHandler(5,4,newValue)}} /></td>
            <td><InputBox number={this.state.table.row5.col5} changeHandler={(newValue)=>{this.changeHandler(5,5,newValue)}} /></td>
            <td className='right-edge-bold' ><InputBox number={this.state.table.row5.col6} changeHandler={(newValue)=>{this.changeHandler(5,6,newValue)}} /></td>
            <td className='left-edge-bold' ><InputBox number={this.state.table.row5.col7} changeHandler={(newValue)=>{this.changeHandler(5,7,newValue)}} /></td>
            <td><InputBox number={this.state.table.row5.col8} changeHandler={(newValue)=>{this.changeHandler(5,8,newValue)}} /></td>
            <td className='right-edge-bold'><InputBox number={this.state.table.row5.col9} changeHandler={(newValue)=>{this.changeHandler(5,9,newValue)}} /></td>
          </tr>
          <tr>
            <td className='bottom-edge-bold left-edge-bold' ><InputBox number={this.state.table.row6.col1} changeHandler={(newValue)=>{this.changeHandler(6,1,newValue)}} /></td>
            <td className='bottom-edge-bold' ><InputBox number={this.state.table.row6.col2} changeHandler={(newValue)=>{this.changeHandler(6,2,newValue)}} /></td>
            <td className='bottom-edge-bold right-edge-bold' ><InputBox number={this.state.table.row6.col3} changeHandler={(newValue)=>{this.changeHandler(6,3,newValue)}} /></td>
            <td className='bottom-edge-bold left-edge-bold' ><InputBox number={this.state.table.row6.col4} changeHandler={(newValue)=>{this.changeHandler(6,4,newValue)}} /></td>
            <td className='bottom-edge-bold' ><InputBox number={this.state.table.row6.col5} changeHandler={(newValue)=>{this.changeHandler(6,5,newValue)}} /></td>
            <td className='bottom-edge-bold right-edge-bold' ><InputBox number={this.state.table.row6.col6} changeHandler={(newValue)=>{this.changeHandler(6,6,newValue)}} /></td>
            <td className='bottom-edge-bold left-edge-bold' ><InputBox number={this.state.table.row6.col7} changeHandler={(newValue)=>{this.changeHandler(6,7,newValue)}} /></td>
            <td className='bottom-edge-bold' ><InputBox number={this.state.table.row6.col8} changeHandler={(newValue)=>{this.changeHandler(6,8,newValue)}} /></td>
            <td className='bottom-edge-bold right-edge-bold' ><InputBox number={this.state.table.row6.col9} changeHandler={(newValue)=>{this.changeHandler(6,9,newValue)}} /></td>
          </tr>
          <tr>
            <td className='top-edge-bold left-edge-bold' ><InputBox number={this.state.table.row7.col1} changeHandler={(newValue)=>{this.changeHandler(7,1,newValue)}} /></td>
            <td className='top-edge-bold' ><InputBox number={this.state.table.row7.col2} changeHandler={(newValue)=>{this.changeHandler(7,2,newValue)}} /></td>
            <td className='top-edge-bold right-edge-bold' ><InputBox number={this.state.table.row7.col3} changeHandler={(newValue)=>{this.changeHandler(7,3,newValue)}} /></td>
            <td className='top-edge-bold left-edge-bold' ><InputBox number={this.state.table.row7.col4} changeHandler={(newValue)=>{this.changeHandler(7,4,newValue)}} /></td>
            <td className='top-edge-bold' ><InputBox number={this.state.table.row7.col5} changeHandler={(newValue)=>{this.changeHandler(7,5,newValue)}} /></td>
            <td className='top-edge-bold right-edge-bold' ><InputBox number={this.state.table.row7.col6} changeHandler={(newValue)=>{this.changeHandler(7,6,newValue)}} /></td>
            <td className='top-edge-bold left-edge-bold' ><InputBox number={this.state.table.row7.col7} changeHandler={(newValue)=>{this.changeHandler(7,7,newValue)}} /></td>
            <td className='top-edge-bold' ><InputBox number={this.state.table.row7.col8} changeHandler={(newValue)=>{this.changeHandler(7,8,newValue)}} /></td>
            <td className='top-edge-bold right-edge-bold' ><InputBox number={this.state.table.row7.col9} changeHandler={(newValue)=>{this.changeHandler(7,9,newValue)}} /></td>
          </tr>
          <tr>
            <td className='left-edge-bold'><InputBox number={this.state.table.row8.col1} changeHandler={(newValue)=>{this.changeHandler(8,1,newValue)}} /></td>
            <td><InputBox number={this.state.table.row8.col2} changeHandler={(newValue)=>{this.changeHandler(8,2,newValue)}} /></td>
            <td className='right-edge-bold' ><InputBox number={this.state.table.row8.col3} changeHandler={(newValue)=>{this.changeHandler(8,3,newValue)}} /></td>
            <td className='left-edge-bold' ><InputBox number={this.state.table.row8.col4} changeHandler={(newValue)=>{this.changeHandler(8,4,newValue)}} /></td>
            <td><InputBox number={this.state.table.row8.col5} changeHandler={(newValue)=>{this.changeHandler(8,5,newValue)}} /></td>
            <td className='right-edge-bold' ><InputBox number={this.state.table.row8.col6} changeHandler={(newValue)=>{this.changeHandler(8,6,newValue)}} /></td>
            <td className='left-edge-bold' ><InputBox number={this.state.table.row8.col7} changeHandler={(newValue)=>{this.changeHandler(8,7,newValue)}} /></td>
            <td><InputBox number={this.state.table.row8.col8} changeHandler={(newValue)=>{this.changeHandler(8,8,newValue)}} /></td>
            <td className='right-edge-bold'><InputBox number={this.state.table.row8.col9} changeHandler={(newValue)=>{this.changeHandler(8,9,newValue)}} /></td>
          </tr>
          <tr>
            <td className='left-edge-bold bottom-edge-bold'><InputBox number={this.state.table.row9.col1} changeHandler={(newValue)=>{this.changeHandler(9,1,newValue)}} /></td>
            <td className='bottom-edge-bold'><InputBox number={this.state.table.row9.col2} changeHandler={(newValue)=>{this.changeHandler(9,2,newValue)}} /></td>
            <td className='right-edge-bold bottom-edge-bold' ><InputBox number={this.state.table.row9.col3} changeHandler={(newValue)=>{this.changeHandler(9,3,newValue)}} /></td>
            <td className='left-edge-bold bottom-edge-bold' ><InputBox number={this.state.table.row9.col4} changeHandler={(newValue)=>{this.changeHandler(9,4,newValue)}} /></td>
            <td className='bottom-edge-bold'><InputBox number={this.state.table.row9.col5} changeHandler={(newValue)=>{this.changeHandler(9,5,newValue)}} /></td>
            <td className='right-edge-bold bottom-edge-bold' ><InputBox number={this.state.table.row9.col6} changeHandler={(newValue)=>{this.changeHandler(9,6,newValue)}} /></td>
            <td className='left-edge-bold bottom-edge-bold' ><InputBox number={this.state.table.row9.col7} changeHandler={(newValue)=>{this.changeHandler(9,7,newValue)}} /></td>
            <td className='bottom-edge-bold'><InputBox number={this.state.table.row9.col8} changeHandler={(newValue)=>{this.changeHandler(9,8,newValue)}} /></td>
            <td className='right-edge-bold bottom-edge-bold'><InputBox number={this.state.table.row9.col9} changeHandler={(newValue)=>{this.changeHandler(9,9,newValue)}} /></td>
          </tr>
          </tbody>
          </table>
        <button id='solve-button' onClick={()=>{this.solveSudoku(this.state.table)}} >Solve!!</button>
      </div>
    );
  }
}

export default Table;
