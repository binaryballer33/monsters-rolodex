import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    // calling ctor for Component
    super();

    // state is always a json object
    // the elements have a id(key), so react can re-render, recognize different components and optimize better
    // create a searchField key so the entire app component can have access to its value
    this.state = {
      monsters: [],
      searchField: '',
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
          }
        )
      );
  }

  render () {
    // filter loops through each element, if the condition is true it keeps the element in the array
    // if the condition is false it removes the element from the array
    // array.filter() returns a new array
    const filteredMonsters = this.state.monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(this.state.searchField);
    });

    return (
      <div className="App">
        <input 
          className='search-box' 
          type='search' 
          placeholder='search monsters' 
          onChange={(event) => {
            // event.target.value contains the text inside of the search box
            // make the search case insensitive
            const searchField = event.target.value.toLocaleLowerCase();

            this.setState((state, props) => {
              return { searchField: searchField };
              // could also write this as return { searchField };
            })
            
          }}
        />

        {filteredMonsters.map((monster) => {
            return <h1 key={monster.id}>{monster.name}</h1>;
        })}
      </div>
    );
  }
}

export default App;
