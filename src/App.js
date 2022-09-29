import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    // calling ctor for Component
    super();

    // state is always a json object
    this.state = {
      name : 'Shaq'
    }

  }

  render () {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Hi {this.state.name}</p>
          <button 
            onClick={() => {
              this.setState({ name: 'Shaquille' });
            }}
          >
              Change Name
          </button>
        </header>
      </div>
    );
  }
}

export default App;