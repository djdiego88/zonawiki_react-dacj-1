import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor()
  {
    super();
    this.state={
      length : 0
    }
  }
  textareaChange = (event) => {
    this.setState({
      length: event.target.value.length
    });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <textarea name="ta_field" cols="100" rows="6" onChange={this.textareaChange}></textarea>
          <p>El número de caracteres escritos es: {this.state.length}</p>
        </header>
      </div>
    );
  }
}

export default App;
