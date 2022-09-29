# Lessons Learned
added `render()` method, converted app from a `function` to a `class` and made app `extend Component`
returned jsx inside of the `render()` 

### Stict equality with objects in javascript example:
>const obj1 = { name: 'Shaquille' }\
>const obj2 = obj1\
>obj1 === obj2 --> ( This is true, because they point to the same place in memory )


>const obj3 = Object.assign({}, obj1)\
>obj1 === obj3 --> ( This is false, because Object.assign() created a completely different object in memory )

>same thing as doing    
>const obj4 = { name: 'Shaquille' }\
>obj1 === obj4 --> ( This is false, because you created a completely different object in memory )

>this.state.name = 'Shaquille' --> ( this will not update the state )  
>this.setState({ name: 'Shaquille' }) --> ( this will update the state )

### Using object destructuring with setState  
> this.state = { name: { firstName: 'Shaquille', lastName: 'Mandy' }, company: 'Amazon'}  
>this.setState({ name : { firstName: 'Shaquille', lastName: 'Mandy'} });  


## Important
you can create state using class components by creating a json object and setting is key, value properties

you can assess the state by using `{}` and inside of the curly brackets `{this.state.keyName}`

React only re-renders under certain conditions
>- State Change ( just because you update a key, value in the state, doesn't mean the state changes, it's still the same object in memory )\
>When you use this.setState it forces the javascript to create a new object in memeory, therefore changing the state, causing a re-render


`this.setState` only updates the keys that you pass it `setState({ name: 'Shaquille' })`, it will keep all the other keys the same
## Links
Lesson [28. Monsters Rolodex - Component State](https://www.udemy.com/course/complete-react-developer-zero-to-mastery/learn/lecture/30554052#overview).

Lesson [29. Monsters Rolodex - setState](https://www.udemy.com/course/complete-react-developer-zero-to-mastery/learn/lecture/30554056#overview).



