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
          <textarea rows="1" cols="1" maxLength='1' value='' />
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <textarea rows="1" cols="1" maxLength='1' value={this.state.number} />
        </React.Fragment>
      );
      
    }
  }
}

export default InputBox;
