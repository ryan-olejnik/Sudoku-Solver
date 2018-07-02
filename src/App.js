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
        <button onClick={()=>{this.setState({fill: 'easy'})}}>Fill Easy Example</button>
        <button onClick={()=>{this.setState({fill: null})}}>Clear</button>
        <Table fill={this.state.fill} />
      </div>
    );
  }
}

export default App;
