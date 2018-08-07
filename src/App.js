import React, { Component } from "react";
import Table from "./components/Table.jsx";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      fill: null,
      windowWidth: 0
    };
    this.updateWindowWidth = this.updateWindowWidth.bind(this);
  }

  updateWindowWidth() {
    this.setState({ windowWidth: window.innerWidth });
  }

  componentDidMount() {
    this.updateWindowWidth();
    window.addEventListener("resize", this.updateWindowWidth);
  }

  componentWillUnmount() {
    window.addEventListener("resize", this.updateWindowWidth);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Sudoku Wizard</h1>
        </header>
        <div className="button-bar">
          <button
            id="fill-example1-button"
            onClick={() => {
              this.setState({ fill: 1 });
            }}
          >
            Fill Example 1
          </button>
          <button
            id="fill-example2-button"
            onClick={() => {
              this.setState({ fill: 2 });
            }}
          >
            Fill Example 2
          </button>
          <button
            id="clear-button"
            onClick={() => {
              this.setState({ fill: null });
            }}
          >
            Clear
          </button>
        </div>
        <Table
          {...{ fill: this.state.fill, windowWidth: this.state.windowWidth }}
        />
      </div>
    );
  }
}

export default App;
