import React, { Component } from 'react';
import './App.css';
import HomeComponent from './HomeComponent';
import ResultComponent from './ResultComponent';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      screen: 1,
      submittedValue: ''
    };
  }

  setScreen = (index, value) => {
    this.setState({
      submittedValue: value,
      screen: index
    });
  }

  render() {
    switch(this.state.screen) {
      case 1:
        return <HomeComponent setScreenFunc={this.setScreen}/>;
      case 2:
        return <ResultComponent submittedValue={this.state.submittedValue}/>;
    }
  }
}

export default App;
