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

    console.log('constructor')
  }

  // mounted is when the component is first placed(mounted) on the DOM
  // this is a good place to add api fetches that need to be there on page load
  componentDidMount() {
    console.log('componentDidMount')
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
    console.log('render')
    return (
      <div className="App">
        <input 
          className='search-box' 
          type='search' 
          placeholder='search monsters' 
          onChange={(event) => {
            // event.target.value contains the text inside of the search box
            // make the search case insensitive
            const searchString = event.target.value.toLocaleLowerCase();
            
            // filter loops through each element, if the condition is true it keeps the element in the array
            // if the condition is false it removes the element from the array
            // array.filter() returns a new array
            const filteredMonsters = this.state.monsters.filter((monster) => {
              return monster.name.toLocaleLowerCase().includes(searchString);
            });

            this.setState((state, props) => {
              return { monsters: filteredMonsters };
            })
            
          }}
        />

        {this.state.monsters.map((monster) => {
            return <h1 key={monster.id}>{monster.name}</h1>;
        })}
      </div>
    );
  }
}

export default App;
