import { useState } from 'react';
import SearchBox from './components/search-box/search-box.component';
import CardList from './components/card-list/card-list.component';
import './App.css';

const App = () => {
    // using array destructuring
    // you don't store whole state objects in memory anymore for functional components
    // you use the useState() hook 
    const [searchField, setSearchField] = useState(''); // [ value, setValue]
    console.log({searchField: searchField})

    // moved this function here for efficiency, so that it is not re-created on every render 
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

      {/* <CardList monsters={filteredMonsters}/> */}
    </div>
  )
}

// class App extends Component {
//   constructor() {
//     // calling ctor for Component
//     super();

//     // state is always a json object
//     // the elements have a id(key), so react can re-render, recognize different components and optimize better
//     // create a searchField key so the entire app component can have access to its value
//     this.state = {
//       monsters: [],
//       searchField: '',
//     };
//   }

//   // mounted is when the component is first placed(mounted) on the DOM
//   // this is a good place to add api fetches that need to be there on page load
//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then((response) => response.json())
//       .then((users) => 
//         this.setState(
//           (state, props) => {
//             return { monsters : users };
//           }
//         )
//       );
//   }

//   // moved this function here for efficiency, so that it is not re-created on every render 
//   onSearchChange = (event) => {
//     // event.target.value contains the text inside of the search box
//     // make the search case insensitive
//     const searchField = event.target.value.toLocaleLowerCase();

//     this.setState((state, props) => {
//       return { searchField: searchField };
//       // could also write this as return { searchField };
//     }) 
//   }

//   render () {
//     // destructuring in order to shorten variable names by not having to use this.state
//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;


//     // filter loops through each element, if the condition is true it keeps the element in the array
//     // if the condition is false it removes the element from the array
//     // array.filter() returns a new array
//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchField);
//     });

//     return (
//       <div className="App">
//         <h1 className='app-title'>Monsters Rolodex</h1>
//         <SearchBox
//           className={'monsters-search-box'} 
//           onChangeHandler={onSearchChange}
//           placeholder={"search monsters"}
//         />

//         <CardList monsters={filteredMonsters}/>
//       </div>
//     );
//   }
// }

export default App;
