import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    // calling ctor for Component
    super();

    // state is always a json object
    this.state = {
      name : {
        firstName: 'Shaq',
        lastName: 'Mandy'
      },
      company: 'Amazon',
    };
  }

  render () {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Hi {this.state.name.firstName} {this.state.name.lastName} I work at {this.state.company}</p>
          <button 
            onClick={() => {
              this.setState((state, props) => {
                return {
                  name : { firstName: 'Shaquille', lastName: 'Mandy'}
                }
              }, () => {
                console.log(this.state)
              });
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
