import React, { Component } from 'react';
import Table from './components/Table.jsx';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Sudoku Wizard</h1>
        </header>
        <Table fill='easy' />
      </div>
    );
  }
}

export default App;
