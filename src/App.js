import React, { Component } from 'react';
import Table from './components/Table.jsx';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      fill: null 
    };
  }  

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Sudoku Wizard</h1>
        </header>
        <button id='fill-example1-button' onClick={()=>{this.setState({fill: 1})}}>Fill Example 1</button>
        <button id='fill-example2-button' onClick={()=>{this.setState({fill: 2})}}>Fill Example 2</button>
        <button id='clear-button'onClick={()=>{this.setState({fill: null})}}>Clear</button>
        <Table fill={this.state.fill} />
      </div>
    );
  }
}

export default App;
