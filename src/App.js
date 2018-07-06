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
        <button id='fill-easy-button' onClick={()=>{this.setState({fill: 'easy'})}}>Fill Easy Example</button>
        <button id='fill-hard-button' onClick={()=>{this.setState({fill: 'hard'})}}>Fill Hard Example</button>
        <button id='clear-button'onClick={()=>{this.setState({fill: null})}}>Clear</button>
        <Table fill={this.state.fill} />
      </div>
    );
  }
}

export default App;
