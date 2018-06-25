import React, { Component } from 'react';
import './InputBox.css';

class InputBox extends Component {
  render() {
    return (
      <React.Fragment>
        <textarea rows="1" cols="9" maxlength='9'>
          {this.props.number}
        </textarea>
      </React.Fragment>
    );
  }
}

export default InputBox;
