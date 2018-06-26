import React, { Component } from 'react';
import './InputBox.css';

class InputBox extends Component {
  constructor(props){
    super(props);
    this.state = {
      number: this.props.number
    }
  }

  componentWillReceiveProps(newProps){
    this.setState({number: newProps.number});
  }

  render() {
    if (!this.state.number){
      return (
        <React.Fragment>
          <textarea rows="1" cols="9" maxlength='9' value='' />
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <textarea rows="1" cols="9" maxlength='9' value={this.state.number} />
        </React.Fragment>
      );
      
    }
  }
}

export default InputBox;
