# React Notes

### General Knowledge
added `render()` method, converted app from a `function` to a `class` and made app `extend Component`
returned jsx inside of the `render()`  

you can create state using class components by creating a json object and setting is key, value properties  

you can assess the state by using `{}` and inside of the curly brackets `{this.state.keyName}`  

### Strict equality with objects in javascript example
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

### React Re-Rendering
React only re-renders under certain conditions  
>- `State Change` ( just because you update a key, value in the state, doesn't mean the state changes, it's still the same object in memory )  
When you use this.setState it forces the javascript to create a new object in memeory, therefore changing the state, causing a re-render


## Links

### Udemy Course  
[Complete React Developer Zero To Mastery](https://www.udemy.com/course/complete-react-developer-zero-to-mastery/)

Lesson [28. Monsters Rolodex - Component State](https://www.udemy.com/course/complete-react-developer-zero-to-mastery/learn/lecture/30554052#overview).

Lesson [29. Monsters Rolodex - setState](https://www.udemy.com/course/complete-react-developer-zero-to-mastery/learn/lecture/30554056#overview).

Lesson [30. Monsters Rolodex - States and Shallow Merge](https://www.udemy.com/course/complete-react-developer-zero-to-mastery/learn/lecture/30554060#overview)

Lesson [31. Monsters Rolodex - setState and Secondary Callback](https://www.udemy.com/course/complete-react-developer-zero-to-mastery/learn/lecture/30554064#overview)  

Lesson [32. Monsters Rolodex - Mapping Arrays to Elements](https://www.udemy.com/course/complete-react-developer-zero-to-mastery/learn/lecture/30554068#overview)  


