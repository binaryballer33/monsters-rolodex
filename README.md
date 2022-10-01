# React Notes

### Renders & Re-renders in React w/ class components
React only re-renders under certain conditions  
>- `State Change` ( just because you update a key, value in the state, doesn't mean the state changes, it's still the same object in memory )  
When you use this.setState it forces the javascript to create a new object in memory, therefore changing the state, causing a re-render  
>- `Properties Change` Whenever a prop is change, React will re-render  

- Constructor runs first, all you really need to do initialize the state in the ctor
- render() method runs second, mounts the jsx to the DOM determines how the UI will look
- componentDidMount() Lifecycle method will run 3rd
- state changes so render() re-renders 

### Render method and Javascript and XML(Jsx) for Class Components
Class Components use `render()` method and `extend Component`
returns jsx inside of the `render()` method 

you can create state for class components by creating a json object and setting its key, value properties  

you can assess the state by using `{}` and inside of the curly brackets `{this.state.keyName}`  

### Strict equality with objects in javascript example
```
const obj1 = { name: 'Shaquille' }\
const obj2 = obj1\
obj1 === obj2 --> ( This is true, because they point to the same place in memory )


const obj3 = Object.assign({}, obj1)\
obj1 === obj3 --> ( This is false, because Object.assign() created a completely different object in memory )

same thing as doing    
const obj4 = { name: 'Shaquille' }\
obj1 === obj4 --> ( This is false, because you created a completely different object in memory )

this.state.name = 'Shaquille' --> ( this will not update the state )  
this.setState({ name: 'Shaquille' }) --> ( this will update the state )
```  

### Using object destructuring with setState  
> this.state = { name: { firstName: 'Shaquille', lastName: 'Mandy' }, company: 'Amazon'}  
>this.setState({ name : { firstName: 'Shaq', lastName: 'Mand'} });  

### Using this.setState
`this.setState` only updates the keys that you pass it `setState({ name: 'Shaquille' })`, it will keep all the other keys the same  

The first argument is the updater callback function. You update the object(the state)   
You can also pass a callback to this.setState as the second argument callback function, this callback will run after the 1st callback   

for the first callback function, the first argument is state, the second is properties when you pass in the object  
```
Example 1:
this.setState((state, props) => {  
    return {  
        name : { firstName: 'Shaquille', lastName: 'Mandy'}  
    }  
}, () => {});


Example 2:
this.setState(
    (state, props) => {  
        return {  
            name : { firstName: 'Shaquille', lastName: 'Mandy'}  
        }  
    }, 
    () => {
       // this callback will only run after the first callback finishes
       console.log(this.state) 
    }
);
```

### Using Array.map()
Array.map() takes a callback function, the 1st argument of the callback is the current element of the array  
The callback function applys itself to every element in the array  
In this case it creates a H1 element with the monsters name for each monster
```
class App extends Component {
  constructor() {
    // calling ctor for Component
    super();

    // state is always a json object
    this.state = {
      // the elements have a id(key), so react can re-render, recognize different components and optimize better
      monsters: [
        { name: 'Linda', id: '12ae33ca' },
        { name: 'Frank', id: '12ae33cb' },
        { name: 'Jacky', id: '12ae33cc' },
        { name: 'Lizzy', id: '12ae33cd' },
      ],
    };

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
```

### React and key elements for HTML elements
the elements have a id(key), so react can re-render, recognize different components and optimize better

### Single Page Applications (SPAs) w/ React
Reacts only changes what it needs to change and it does it w/o having to constantly refresh the entire webpage  
Once the webpage load, React has all the code and can intelligently CRUD components

### Lifecycle Method: componentDidMount
mounted is when the component is first placed(mounted) on the DOM  
this is a good place to add api fetches that need to be there on page load

### Input Search Box Component and Array.filter()
filter loops through each element, if the condition is true it keeps the element in the array  
if the condition is false it removes the element from the array  
Because Array.filter() modifies the array in place it's best practice to create a new array  

Example of using Array.filter()
```
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
```





## Links

[Json Place Holder Users Api](https://jsonplaceholder.typicode.com/users)

### Udemy Course  
[Complete React Developer Zero To Mastery](https://www.udemy.com/course/complete-react-developer-zero-to-mastery/)

- Lesson [28. Monsters Rolodex - Component State](https://www.udemy.com/course/complete-react-developer-zero-to-mastery/learn/lecture/30554052#overview).

- Lesson [29. Monsters Rolodex - setState](https://www.udemy.com/course/complete-react-developer-zero-to-mastery/learn/lecture/30554056#overview).

- Lesson [30. Monsters Rolodex - States and Shallow Merge](https://www.udemy.com/course/complete-react-developer-zero-to-mastery/learn/lecture/30554060#overview)

- Lesson [31. Monsters Rolodex - setState and Secondary Callback](https://www.udemy.com/course/complete-react-developer-zero-to-mastery/learn/lecture/30554064#overview)  

- Lesson [32. Monsters Rolodex - Mapping Arrays to Elements](https://www.udemy.com/course/complete-react-developer-zero-to-mastery/learn/lecture/30554068#overview)  

- Lesson [34. Monsters Rolodex - Keys For Mapping](https://www.udemy.com/course/complete-react-developer-zero-to-mastery/learn/lecture/30554070#overview) 

- Lesson [35. Monsters Rolodex -Single Page Applications (SPAs)](https://www.udemy.com/course/complete-react-developer-zero-to-mastery/learn/lecture/30554072#overview) 

- Lesson [36. Monsters Rolodex - Lifecycle Method: componentDidMount](https://www.udemy.com/course/complete-react-developer-zero-to-mastery/learn/lecture/30554074#overview) 

- Lesson [38. Monsters Rolodex - Renders & Re-renders in React](https://www.udemy.com/course/complete-react-developer-zero-to-mastery/learn/lecture/30554078#overview)

- Lesson [39. Monsters Rolodex - Input Search Box Component](https://www.udemy.com/course/complete-react-developer-zero-to-mastery/learn/lecture/30554080#overview)

- Lesson [40. Monsters Rolodex - Searching & Filtering](https://www.udemy.com/course/complete-react-developer-zero-to-mastery/learn/lecture/30554082#overview)

- Lesson [42. Monsters Rolodex - Storing Original Data](https://www.udemy.com/course/complete-react-developer-zero-to-mastery/learn/lecture/30554086#overview)

- Lesson [43. Monsters Rolodex - Optimizations](https://www.udemy.com/course/complete-react-developer-zero-to-mastery/learn/lecture/30554088#overview)

- Lesson [44. Monsters Rolodex - Understanding Components](https://www.udemy.com/course/complete-react-developer-zero-to-mastery/learn/lecture/30572408#overview)

- Lesson [45. Monsters Rolodex - CardList Component](https://www.udemy.com/course/complete-react-developer-zero-to-mastery/learn/lecture/30572416#overview)

- Lesson [46. Monsters Rolodex - Component Props](https://www.udemy.com/course/complete-react-developer-zero-to-mastery/learn/lecture/30572424#overview)

- Lesson [47. Monsters Rolodex - Rendering and Re-rendering part 2](https://www.udemy.com/course/complete-react-developer-zero-to-mastery/learn/lecture/30572430#overview)

- Lesson [48. Monsters Rolodex - SearchBox Component](https://www.udemy.com/course/complete-react-developer-zero-to-mastery/learn/lecture/30572436#overview)

- Lesson [49. Monsters Rolodex - CSS in React](https://www.udemy.com/course/complete-react-developer-zero-to-mastery/learn/lecture/30574736#overview)

- Lesson [50. Monsters Rolodex - CardList Component](https://www.udemy.com/course/complete-react-developer-zero-to-mastery/learn/lecture/30574780#overview)