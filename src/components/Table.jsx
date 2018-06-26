import React, { Component } from 'react';
import InputBox from './InputBox.jsx';
import './Table.css';

class Table extends Component {
  constructor(){
    super();
    this.state = {
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

  fillEasyExample(){
    this.setState({
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
    })
  }

  clearTable(){
    this.setState({
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
    });
  }

  componentWillReceiveProps(newProps){
    if (newProps.fill === 'easy'){
      console.log('Filling EasyExample');
      this.fillEasyExample();
    } else if (newProps.fill === null){
      this.clearTable();
    }
  }

  

  render() {
    return (
      <div className="Table">
      <table className="sudokuTable">
        <tbody>
        <tr> 
          <td className='top-edge-bold left-edge-bold'><InputBox number={this.state.row1.col1}/></td>
          <td className='top-edge-bold'><InputBox number={this.state.row1.col2}/></td>
          <td className='top-edge-bold right-edge-bold' ><InputBox number={this.state.row1.col3}/></td>
          <td className='top-edge-bold left-edge-bold' ><InputBox number={this.state.row1.col4}/></td>
          <td className='top-edge-bold'><InputBox number={this.state.row1.col5}/></td>
          <td className='top-edge-bold right-edge-bold' ><InputBox number={this.state.row1.col6}/></td>
          <td className='top-edge-bold left-edge-bold' ><InputBox number={this.state.row1.col7}/></td>
          <td className='top-edge-bold'><InputBox number={this.state.row1.col8}/></td>
          <td className='top-edge-bold right-edge-bold'><InputBox number={this.state.row1.col9}/></td>
        </tr>
        <tr>
          <td className='left-edge-bold'><InputBox number={this.state.row2.col1}/></td>
          <td><InputBox number={this.state.row2.col2}/></td>
          <td className='right-edge-bold' ><InputBox number={this.state.row2.col3}/></td>
          <td className='left-edge-bold' ><InputBox number={this.state.row2.col4}/></td>
          <td><InputBox number={this.state.row2.col5}/></td>
          <td className='right-edge-bold' ><InputBox number={this.state.row2.col6}/></td>
          <td className='left-edge-bold' ><InputBox number={this.state.row2.col7}/></td>
          <td><InputBox number={this.state.row2.col8}/></td>
          <td className='right-edge-bold'><InputBox number={this.state.row2.col9}/></td>
        </tr>
        <tr>
          <td className='bottom-edge-bold left-edge-bold'><InputBox number={this.state.row3.col1}/></td>
          <td className='bottom-edge-bold'><InputBox number={this.state.row3.col2}/></td>
          <td className='bottom-edge-bold right-edge-bold'><InputBox number={this.state.row3.col3}/></td>
          <td className='bottom-edge-bold left-edge-bold'><InputBox number={this.state.row3.col4}/></td>
          <td className='bottom-edge-bold'><InputBox number={this.state.row3.col5}/></td>
          <td className='bottom-edge-bold right-edge-bold'><InputBox number={this.state.row3.col6}/></td>
          <td className='bottom-edge-bold left-edge-bold'><InputBox number={this.state.row3.col7}/></td>
          <td className='bottom-edge-bold'><InputBox number={this.state.row3.col8}/></td>
          <td className='bottom-edge-bold right-edge-bold'><InputBox number={this.state.row3.col9}/></td>
        </tr>
        <tr>
          <td className='top-edge-bold left-edge-bold' ><InputBox number={this.state.row4.col1}/></td>
          <td className='top-edge-bold' ><InputBox number={this.state.row4.col2}/></td>
          <td className='top-edge-bold right-edge-bold' ><InputBox number={this.state.row4.col3}/></td>
          <td className='top-edge-bold left-edge-bold' ><InputBox number={this.state.row4.col4}/></td>
          <td className='top-edge-bold' ><InputBox number={this.state.row4.col5}/></td>
          <td className='top-edge-bold right-edge-bold' ><InputBox number={this.state.row4.col6}/></td>
          <td className='top-edge-bold left-edge-bold' ><InputBox number={this.state.row4.col7}/></td>
          <td className='top-edge-bold' ><InputBox number={this.state.row4.col8}/></td>
          <td className='top-edge-bold right-edge-bold' ><InputBox number={this.state.row4.col9}/></td>
        </tr>
        <tr>
          <td className='left-edge-bold'><InputBox number={this.state.row5.col1}/></td>
          <td><InputBox number={this.state.row5.col2}/></td>
          <td className='right-edge-bold' ><InputBox number={this.state.row5.col3}/></td>
          <td className='left-edge-bold' ><InputBox number={this.state.row5.col4}/></td>
          <td><InputBox number={this.state.row5.col5}/></td>
          <td className='right-edge-bold' ><InputBox number={this.state.row5.col6}/></td>
          <td className='left-edge-bold' ><InputBox number={this.state.row5.col7}/></td>
          <td><InputBox number={this.state.row5.col8}/></td>
          <td className='right-edge-bold'><InputBox number={this.state.row5.col9}/></td>
        </tr>
        <tr>
          <td className='bottom-edge-bold left-edge-bold' ><InputBox number={this.state.row6.col1}/></td>
          <td className='bottom-edge-bold' ><InputBox number={this.state.row6.col2}/></td>
          <td className='bottom-edge-bold right-edge-bold' ><InputBox number={this.state.row6.col3}/></td>
          <td className='bottom-edge-bold left-edge-bold' ><InputBox number={this.state.row6.col4}/></td>
          <td className='bottom-edge-bold' ><InputBox number={this.state.row6.col5}/></td>
          <td className='bottom-edge-bold right-edge-bold' ><InputBox number={this.state.row6.col6}/></td>
          <td className='bottom-edge-bold left-edge-bold' ><InputBox number={this.state.row6.col7}/></td>
          <td className='bottom-edge-bold' ><InputBox number={this.state.row6.col8}/></td>
          <td className='bottom-edge-bold right-edge-bold' ><InputBox number={this.state.row6.col9}/></td>
        </tr>
        <tr>
          <td className='top-edge-bold left-edge-bold' ><InputBox number={this.state.row7.col1}/></td>
          <td className='top-edge-bold' ><InputBox number={this.state.row7.col2}/></td>
          <td className='top-edge-bold right-edge-bold' ><InputBox number={this.state.row7.col3}/></td>
          <td className='top-edge-bold left-edge-bold' ><InputBox number={this.state.row7.col4}/></td>
          <td className='top-edge-bold' ><InputBox number={this.state.row7.col5}/></td>
          <td className='top-edge-bold right-edge-bold' ><InputBox number={this.state.row7.col6}/></td>
          <td className='top-edge-bold left-edge-bold' ><InputBox number={this.state.row7.col7}/></td>
          <td className='top-edge-bold' ><InputBox number={this.state.row7.col8}/></td>
          <td className='top-edge-bold right-edge-bold' ><InputBox number={this.state.row7.col9}/></td>
        </tr>
        <tr>
          <td className='left-edge-bold'><InputBox number={this.state.row8.col1}/></td>
          <td><InputBox number={this.state.row8.col2}/></td>
          <td className='right-edge-bold' ><InputBox number={this.state.row8.col3}/></td>
          <td className='left-edge-bold' ><InputBox number={this.state.row8.col4}/></td>
          <td><InputBox number={this.state.row8.col5}/></td>
          <td className='right-edge-bold' ><InputBox number={this.state.row8.col6}/></td>
          <td className='left-edge-bold' ><InputBox number={this.state.row8.col7}/></td>
          <td><InputBox number={this.state.row8.col8}/></td>
          <td className='right-edge-bold'><InputBox number={this.state.row8.col9}/></td>
        </tr>
        <tr>
          <td className='left-edge-bold bottom-edge-bold'><InputBox number={this.state.row9.col1}/></td>
          <td className='bottom-edge-bold'><InputBox number={this.state.row9.col2}/></td>
          <td className='right-edge-bold bottom-edge-bold' ><InputBox number={this.state.row9.col3}/></td>
          <td className='left-edge-bold bottom-edge-bold' ><InputBox number={this.state.row9.col4}/></td>
          <td className='right-edge-bold bottom-edge-bold'><InputBox number={this.state.row9.col5}/></td>
          <td className='right-edge-bold bottom-edge-bold' ><InputBox number={this.state.row9.col6}/></td>
          <td className='left-edge-bold bottom-edge-bold' ><InputBox number={this.state.row9.col7}/></td>
          <td className='bottom-edge-bold'><InputBox number={this.state.row9.col8}/></td>
          <td className='right-edge-bold bottom-edge-bold'><InputBox number={this.state.row9.col9}/></td>
        </tr>
        </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
