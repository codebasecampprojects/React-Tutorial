import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class HomeComponent extends Component {

  constructor(props) {
    super(props);

    this.state = {
      value: '',
      submittedValue: ''
    }

    this.onChangeInput = this.onChangeInput.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
  }

  onChangeInput(event) {
    this.setState({value: event.target.value});
  }

  onSubmitForm(event) {
    event.preventDefault();
    this.setState({submittedValue: this.state.value});
    this.props.setScreenFunc(2, this.state.value);
    
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <form onSubmit={this.onSubmitForm}>
          <input type="text" value={this.state.value} onChange={this.onChangeInput} />
          <input type="submit" value="Search" />
          <h2>{this.state.submittedValue}</h2>
        </form>
        
      </div>
    );
  }
}

export default HomeComponent;
