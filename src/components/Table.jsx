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
        currentVacancyIndex: 0 // Start at the first item in the vacancyList
    }
    this.changeHandler = this.changeHandler.bind(this);
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
    let stopIndex = 17;
    let currentVacancyIndex = this.state.currentVacancyIndex; 
    let currentValueIndex = this.state.vacancyList[currentVacancyIndex].currentValueIndex; 
    let table = this.state.table;
    console.log(`currentVacancyIndex = ${this.state.currentVacancyIndex}, trying value:${table[`row${row}`][`col${col}`]} (index: ${currentValueIndex}) in row:${row}, col:${col}...`);
    console.log(`${table[`row${row}`][`col${col}`]} should equal ${this.state.vacancyList[currentVacancyIndex]['possibleValues'][currentValueIndex]}`)
    // let vacancyList = this.state.vacancyList;
    if (sudokuAnalyzer.isCellValid(table, row, col)){
      console.log(`   value ${this.state.table[`row${row}`][`col${col}`]} in row ${row}, col ${col} is valid!, moving on to next vacancy...`);

      if (this.state.currentVacancyIndex < stopIndex){
        // Move on to the NEXT VACANCY
        currentVacancyIndex++;
        let row = this.state.vacancyList[currentVacancyIndex]['row'];
        let col = this.state.vacancyList[currentVacancyIndex]['col'];
        table[`row${row}`][`col${col}`] = this.state.vacancyList[currentVacancyIndex]['possibleValues'][currentValueIndex];

        this.setState({
          currentVacancyIndex: currentVacancyIndex,
          table: table
        }, ()=>{this.testValue(row, col)});

      } else if (this.state.currentVacancyIndex === stopIndex){
        console.log('DONE!!!')
      } else {
        console.log('Error....currentVacancyIndex somehow exceeded stopIndex')
      }
    } else {
      console.log('   cell Invalid.......');
      console.log('   before incrementing index:')
      console.log('   current vacancys index:', this.state.vacancyList[this.state.currentVacancyIndex]['currentValueIndex']);
      console.log('   current vacancys possibleValues.length:', this.state.vacancyList[this.state.currentVacancyIndex]['possibleValues'].length);
      
      // IF there are more possibleValues to try:
      if (this.state.vacancyList[this.state.currentVacancyIndex]['currentValueIndex'] < this.state.vacancyList[this.state.currentVacancyIndex]['possibleValues'].length - 1){
        // try the next value in that vacancy's possibleValues list:
        console.log('   trying the next value in possibleValues');
        let currentValueIndex = this.state.vacancyList[this.state.currentVacancyIndex]['currentValueIndex'] + 1;

        let vacancyList = this.state.vacancyList;
        table[`row${row}`][`col${col}`] = this.state.vacancyList[this.state.currentVacancyIndex]['possibleValues'][currentValueIndex];
        vacancyList[this.state.currentVacancyIndex]['currentValueIndex'] = currentValueIndex;
        this.setState({ table: table, vacancyList: vacancyList }, ()=>{this.testValue(row, col)});
        
      } else {
        //All of the possibleValues are invalid:
        console.log('last possibleValue invalid!, need to Backtrack!!!');
        
      }

      // ELSE, BACKTRACK!



    }
  }

  solveSudoku(table){
    let sortedVacancyList = sudokuAnalyzer.analyzeVacancies(this.state.table);
    // Start by putting the first possible value into the first vacancy, and then test with testValue function
    let row = sortedVacancyList[0]['row'];
    let col = sortedVacancyList[0]['col'];
    table[`row${row}`][`col${col}`] = sortedVacancyList[0]['possibleValues'][0];

    this.setState({
      vacancyList: sortedVacancyList,
      table: table
    }, ()=>{this.testValue(row, col)});

    // this.setState({
    //   vacancyList: sortedVacancyList,

    // }, ()=>{this.testValue(this.state.vacancyList[this.state.currentVacancyIndex]['row'], this.state.vacancyList[this.state.currentVacancyIndex]['col']);});
    
  }


  render() {
    return (
      <div className="Table">
        <table className="sudokuTable">
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
        <button onClick={()=>{console.log('Is row2, col2 Valid?:', sudokuAnalyzer.isCellValid(this.state.table, 2,2))}} >isCellValid(table, 2,2)</button>
        <button onClick={()=>{console.log('Valid numbers for (row5, col5) are:', sudokuAnalyzer.determineValidNumbers(this.state.table, 5,5))}} >Determine Valid Numbers for row5,col5</button>
        <button onClick={()=>{console.log(sudokuAnalyzer.analyzeVacancies(this.state.table, []))}} >Determine Valid Numbers for all Vacancies</button>
        <button onClick={()=>{this.solveSudoku(this.state.table)}} >Solve!!</button>
      </div>
    );
  }
}

export default Table;
