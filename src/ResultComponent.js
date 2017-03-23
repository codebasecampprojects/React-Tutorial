import React, { Component } from 'react';
import './App.css';

class ResultComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      result: props.submittedValue
    };
  }

  setScreen(index) {
    this.setState({screen: index});
  }

  render() {
    return (
      <h2>{this.state.result}</h2>
      );
  }
}

export default ResultComponent;
