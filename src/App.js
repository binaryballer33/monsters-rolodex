import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    // calling ctor for Component
    super();

    // state is always a json object
    // the elements have a id(key), so react can re-render, recognize different components and optimize better
    this.state = {
      monsters: []
    };

  }

  // mounted is when the component is first placed(mounted) on the DOM
  // this is a good place to add api fetches that need to be there on page load
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => 
        this.setState(
          (state, props) => {
            return { monsters : users };
          }, 
          () => {
            console.log(this.state);
          }
        )
      );
  }

  render () {
    return (
      <div className="App">
        {this.state.monsters.map((monster) => {
            return <h1 key={monster.id}>{monster.name}</h1>;
        })}
      </div>
    );
  }
}

export default App;
