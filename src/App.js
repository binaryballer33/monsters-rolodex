import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    // calling ctor for Component
    super();

    // state is always a json object
    this.state = {
      monsters: [
        { name: 'Linda' },
        { name: 'Frank'},
        { name: 'Jacky'},
        { name: 'Shaquille'},
      ],
    };

  }

  render () {
    return (
      <div className="App">
        {this.state.monsters.map((monster) => {
            return <h1>{monster.name}</h1>;
        })}
      </div>
    );
  }
}

export default App;
