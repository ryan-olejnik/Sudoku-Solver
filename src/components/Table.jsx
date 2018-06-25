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
      row2: {},
      row3: {},
      row4: {},
      row5: {},
      row6: {},
      row7: {},
      row8: {},
      row9: {}
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
        <td>cell1_2</td>
        <td>cell2_2</td>
        <td>cell3_2</td>
        <td>cell4_2</td>
        <td>cell5_2</td>
        <td>cell6_2</td>
        <td>cell7_2</td>
        <td>cell8_2</td>
        <td>cell9_2</td>
        </tr>
        <tr>
        <td>cell1_3</td>
        <td>cell2_3</td>
        <td>cell3_3</td>
        <td>cell4_3</td>
        <td>cell5_3</td>
        <td>cell6_3</td>
        <td>cell7_3</td>
        <td>cell8_3</td>
        <td>cell9_3</td>
        </tr>
        <tr>
        <td>cell1_4</td>
        <td>cell2_4</td>
        <td>cell3_4</td>
        <td>cell4_4</td>
        <td>cell5_4</td>
        <td>cell6_4</td>
        <td>cell7_4</td>
        <td>cell8_4</td>
        <td>cell9_4</td>
        </tr>
        <tr>
        <td>cell1_5</td>
        <td>cell2_5</td>
        <td>cell3_5</td>
        <td>cell4_5</td>
        <td>cell5_5</td>
        <td>cell6_5</td>
        <td>cell7_5</td>
        <td>cell8_5</td>
        <td>cell9_5</td>
        </tr>
        <tr>
        <td>cell1_6</td>
        <td>cell2_6</td>
        <td>cell3_6</td>
        <td>cell4_6</td>
        <td>cell5_6</td>
        <td>cell6_6</td>
        <td>cell7_6</td>
        <td>cell8_6</td>
        <td>cell9_6</td>
        </tr>
        <tr>
        <td>cell1_7</td>
        <td>cell2_7</td>
        <td>cell3_7</td>
        <td>cell4_7</td>
        <td>cell5_7</td>
        <td>cell6_7</td>
        <td>cell7_7</td>
        <td>cell8_7</td>
        <td>cell9_7</td>
        </tr>
        <tr>
        <td>cell1_8</td>
        <td>cell2_8</td>
        <td>cell3_8</td>
        <td>cell4_8</td>
        <td>cell5_8</td>
        <td>cell6_8</td>
        <td>cell7_8</td>
        <td>cell8_8</td>
        <td>cell9_8</td>
        </tr>
        <tr>
        <td>cell1_9</td>
        <td>cell2_9</td>
        <td>cell3_9</td>
        <td>cell4_9</td>
        <td>cell5_9</td>
        <td>cell6_9</td>
        <td>cell7_9</td>
        <td>cell8_9</td>
        <td>cell9_9</td>
        </tr>
        </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
