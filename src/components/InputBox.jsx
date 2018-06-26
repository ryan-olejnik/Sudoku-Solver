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
    const numberValue = (this.state.number)? this.state.number : '';
    return (
      <React.Fragment>
        <textarea 
        rows="1" 
        cols="1" 
        maxLength='1' 
        value={numberValue} 
        onChange={(event)=>{
          event.preventDefault();
          this.props.changeHandler(event.target.value)
        }
      }/>
      </React.Fragment>
    );  
  }
}

export default InputBox;
