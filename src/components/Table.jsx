import React, { Component } from 'react';
import InputBox from './InputBox.jsx';
import './Table.css';

class Table extends Component {
  constructor(){
    super();
    this.state = {
      row1: {
        col1: 'row1,col1',
        col2: 'row1,col2',
        col3: 'row1,col3',
        col4: 'row1,col4',
        col5: 'row1,col5',
        col6: 'row1,col6',
        col7: 'row1,col7',
        col8: 'row1,col8',
        col9: 'row1,col9',
      },
      row2: {
        col1: 'row2,col1',
        col2: 'row2,col2',
        col3: 'row2,col3',
        col4: 'row2,col4',
        col5: 'row2,col5',
        col6: 'row2,col6',
        col7: 'row2,col7',
        col8: 'row2,col8',
        col9: 'row2,col9',
      },
      row3: {
        col1: 'row3,col1',
        col2: 'row3,col2',
        col3: 'row3,col3',
        col4: 'row3,col4',
        col5: 'row3,col5',
        col6: 'row3,col6',
        col7: 'row3,col7',
        col8: 'row3,col8',
        col9: 'row3,col9',
      },
      row4: {
        col1: 'row4,col1',
        col2: 'row4,col2',
        col3: 'row4,col3',
        col4: 'row4,col4',
        col5: 'row4,col5',
        col6: 'row4,col6',
        col7: 'row4,col7',
        col8: 'row4,col8',
        col9: 'row4,col9',
      },
      row5: {
        col1: 'row5,col1',
        col2: 'row5,col2',
        col3: 'row5,col3',
        col4: 'row5,col4',
        col5: 'row5,col5',
        col6: 'row5,col6',
        col7: 'row5,col7',
        col8: 'row5,col8',
        col9: 'row5,col9',
      },
      row6: {
        col1: 'row6,col1',
        col2: 'row6,col2',
        col3: 'row6,col3',
        col4: 'row6,col4',
        col5: 'row6,col5',
        col6: 'row6,col6',
        col7: 'row6,col7',
        col8: 'row6,col8',
        col9: 'row6,col9',
      },
      row7: {
        col1: 'row7,col1',
        col2: 'row7,col2',
        col3: 'row7,col3',
        col4: 'row7,col4',
        col5: 'row7,col5',
        col6: 'row7,col6',
        col7: 'row7,col7',
        col8: 'row7,col8',
        col9: 'row7,col9',
      },
      row8: {
        col1: 'row8,col1',
        col2: 'row8,col2',
        col3: 'row8,col3',
        col4: 'row8,col4',
        col5: 'row8,col5',
        col6: 'row8,col6',
        col7: 'row8,col7',
        col8: 'row8,col8',
        col9: 'row8,col9',
      },
      row9: {
        col1: 'row9,col1',
        col2: 'row9,col2',
        col3: 'row9,col3',
        col4: 'row9,col4',
        col5: 'row9,col5',
        col6: 'row9,col6',
        col7: 'row9,col7',
        col8: 'row9,col8',
        col9: 'row9,col9',
      }
    }
  }
  render() {
    return (
      <div className="Table">
      <table class="cinereousTable">
        <tbody>
        <tr>
          <td><InputBox number={this.state.row1.col1}/></td>
          <td><InputBox number={this.state.row1.col2}/></td>
          <td><InputBox number={this.state.row1.col3}/></td>
          <td><InputBox number={this.state.row1.col4}/></td>
          <td><InputBox number={this.state.row1.col5}/></td>
          <td><InputBox number={this.state.row1.col6}/></td>
          <td><InputBox number={this.state.row1.col7}/></td>
          <td><InputBox number={this.state.row1.col8}/></td>
          <td><InputBox number={this.state.row1.col9}/></td>
        </tr>
        <tr>
          <td><InputBox number={this.state.row2.col1}/></td>
          <td><InputBox number={this.state.row2.col2}/></td>
          <td><InputBox number={this.state.row2.col3}/></td>
          <td><InputBox number={this.state.row2.col4}/></td>
          <td><InputBox number={this.state.row2.col5}/></td>
          <td><InputBox number={this.state.row2.col6}/></td>
          <td><InputBox number={this.state.row2.col7}/></td>
          <td><InputBox number={this.state.row2.col8}/></td>
          <td><InputBox number={this.state.row2.col9}/></td>
        </tr>
        <tr>
          <td><InputBox number={this.state.row3.col1}/></td>
          <td><InputBox number={this.state.row3.col2}/></td>
          <td><InputBox number={this.state.row3.col3}/></td>
          <td><InputBox number={this.state.row3.col4}/></td>
          <td><InputBox number={this.state.row3.col5}/></td>
          <td><InputBox number={this.state.row3.col6}/></td>
          <td><InputBox number={this.state.row3.col7}/></td>
          <td><InputBox number={this.state.row3.col8}/></td>
          <td><InputBox number={this.state.row3.col9}/></td>
        </tr>
        <tr>
          <td><InputBox number={this.state.row4.col1}/></td>
          <td><InputBox number={this.state.row4.col2}/></td>
          <td><InputBox number={this.state.row4.col3}/></td>
          <td><InputBox number={this.state.row4.col4}/></td>
          <td><InputBox number={this.state.row4.col5}/></td>
          <td><InputBox number={this.state.row4.col6}/></td>
          <td><InputBox number={this.state.row4.col7}/></td>
          <td><InputBox number={this.state.row4.col8}/></td>
          <td><InputBox number={this.state.row4.col9}/></td>
        </tr>
        <tr>
          <td><InputBox number={this.state.row5.col1}/></td>
          <td><InputBox number={this.state.row5.col2}/></td>
          <td><InputBox number={this.state.row5.col3}/></td>
          <td><InputBox number={this.state.row5.col4}/></td>
          <td><InputBox number={this.state.row5.col5}/></td>
          <td><InputBox number={this.state.row5.col6}/></td>
          <td><InputBox number={this.state.row5.col7}/></td>
          <td><InputBox number={this.state.row5.col8}/></td>
          <td><InputBox number={this.state.row5.col9}/></td>
        </tr>
        <tr>
          <td><InputBox number={this.state.row6.col1}/></td>
          <td><InputBox number={this.state.row6.col2}/></td>
          <td><InputBox number={this.state.row6.col3}/></td>
          <td><InputBox number={this.state.row6.col4}/></td>
          <td><InputBox number={this.state.row6.col5}/></td>
          <td><InputBox number={this.state.row6.col6}/></td>
          <td><InputBox number={this.state.row6.col7}/></td>
          <td><InputBox number={this.state.row6.col8}/></td>
          <td><InputBox number={this.state.row6.col9}/></td>
        </tr>
        <tr>
          <td><InputBox number={this.state.row7.col1}/></td>
          <td><InputBox number={this.state.row7.col2}/></td>
          <td><InputBox number={this.state.row7.col3}/></td>
          <td><InputBox number={this.state.row7.col4}/></td>
          <td><InputBox number={this.state.row7.col5}/></td>
          <td><InputBox number={this.state.row7.col6}/></td>
          <td><InputBox number={this.state.row7.col7}/></td>
          <td><InputBox number={this.state.row7.col8}/></td>
          <td><InputBox number={this.state.row7.col9}/></td>
        </tr>
        <tr>
          <td><InputBox number={this.state.row8.col1}/></td>
          <td><InputBox number={this.state.row8.col2}/></td>
          <td><InputBox number={this.state.row8.col3}/></td>
          <td><InputBox number={this.state.row8.col4}/></td>
          <td><InputBox number={this.state.row8.col5}/></td>
          <td><InputBox number={this.state.row8.col6}/></td>
          <td><InputBox number={this.state.row8.col7}/></td>
          <td><InputBox number={this.state.row8.col8}/></td>
          <td><InputBox number={this.state.row8.col9}/></td>
        </tr>
        <tr>
          <td><InputBox number={this.state.row9.col1}/></td>
          <td><InputBox number={this.state.row9.col2}/></td>
          <td><InputBox number={this.state.row9.col3}/></td>
          <td><InputBox number={this.state.row9.col4}/></td>
          <td><InputBox number={this.state.row9.col5}/></td>
          <td><InputBox number={this.state.row9.col6}/></td>
          <td><InputBox number={this.state.row9.col7}/></td>
          <td><InputBox number={this.state.row9.col8}/></td>
          <td><InputBox number={this.state.row9.col9}/></td>
        </tr>
        </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
