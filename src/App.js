import { useState, useEffect } from 'react';
import SearchBox from './components/search-box/search-box.component';
import CardList from './components/card-list/card-list.component';
import './App.css';

const App = () => {
    // using array destructuring
    // you don't store whole state objects in memory anymore for functional components
    // you use the useState() hook 
    const [searchField, setSearchField] = useState(''); // [ value, setValue]
    const [monsters, setMonsters] = useState([]) // initialize monsters to a empty array like before
    const [filteredMonsters, setFilteredMonsters] = useState(monsters)

    // The 1st Arg is a Callback function, and it runs onces automatically upon mounting the component
    // 2nd Arg is a Array of Dependencies Array of Dependencies is usually a state or prop value
    // and if it changes it will run the 1st Arg Callback Function
    // because we don't ever want this Fetch call to re-run we won't put anything in the array of dependencies
    // this way the Fetch will never get re-ran from the 1st arg callback function, because there are no values
    // to update in the array of dependencies, if you only want something to run once, set array of dependencies to a empty array []
    useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) =>  setMonsters(users));
    }, []);

    // put this in a useEffect to prevent Array.filter() from being called whenever any state updates
    // only want Array.filter() being called when the state IT CARES ABOUT UPDATES, which is monsters and searchField
    useEffect(() => {
      const newFilteredMonsters = monsters.filter((monster) => {
        return monster.name.toLocaleLowerCase().includes(searchField);
      });

      setFilteredMonsters(newFilteredMonsters);
    }, [monsters, searchField])

    const onSearchChange = (event) => {
      // event.target.value contains the text inside of the search box
      // make the search case insensitive
      const searchFieldString = event.target.value.toLocaleLowerCase();
      setSearchField(searchFieldString);
    }

  return (
    <div className="App">
      <h1 className='app-title'>Monsters Rolodex</h1>
      <SearchBox
        className={'monsters-search-box'} 
        onChangeHandler={onSearchChange}
        placeholder={"search monsters"}
      />

      <CardList monsters={filteredMonsters}/>
    </div>
  )
}

export default App;
