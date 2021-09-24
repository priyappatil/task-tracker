// This App.js is a component.
// import Header from './Components/Header'
// import Button from './Components/Button'
// import Tasks from './Components/Tasks'

// CSS in JavaScript
// const buttonStyles = {
//   backgroundColor : 'blue',
//   color : 'white',
//   padding : '20px'
// }

// function App() {
//   return (
//     <div className="App">
//       <div className="container">
//         {/* <Header title = 100 id = "False" /> */}
//         <Header title = "Heading-1" id = {-1} />
//         {/* <Header /> */}
//         {/* <Header title = "Heading-2" /> */}
//         {/* <Header id = {-2} /> */}
//         {/* <button style = {buttonStyles}>Add</button> */}
//         <Button color = "white" backgroundColor = "red" text = "Hello" padding = "10px" />
//         <Button backgroundColor="black" color="white" text="ClickMe" />
//         <Tasks />
//       </div>
//     </div>
//   );
// }

// export default App;

// {} => Because we are using JSX

// States in React

import { Component } from "react";
import Person from "./Components/Person";
import './Components/Person.css';

// States in Class-based Components :-
 
class App extends Component {
  // States of the App Component --> Data of the Component
  // States are immutable i.e cannot be chahged.
  state = {                      // name of state is always going to be state
    person : [
      {name : 'Max', age : 21},
      {name : 'Evan', age : 24},
      {name : 'Ben', age : 22}
    ],

    otherState : 'Some other State'
  }

  // Methods :- Functionalities inside a class
  changeState = () => {
    console.log('Button Clicked!!');
    // Change the name state
    // this.state.person[0].name = 'New Name'       --> Don't do this, don't change the state directly.

    // setState() --> only used for the class-based component
    this.setState( {
      person : [
        {name : 'Maximilliam', age : '21'},
        {name : 'Evan Potter', age : '25'},
        {name : 'Benjamin', age : '27'}
      ]
    } )

    console.log(this.state);  // You will find that the original state doesn't change only the updated values are getting rendered there.
  } 

  changeName = (event) => {
    this.setState( {
      person : [
        {name : 'Max', age : '21'},
        {name : event.target.value, age : '29'},
        {name : event.target.value, age : '30'}
      ]
    })
  }

  render() {
    return(
      // Accessing the data from the component state
      <div style = {{display:'flex', flexDirection:'column'}}>
        <div>
          <Person 
          name = {this.state.person[0].name} 
          age = {this.state.person[0].age} 
          myClick = {() => this.changeName('Max!!!')} />
          
          <Person 
          name = {this.state.person[1].name} 
          age = {this.state.person[1].age}
          myClick = {this.changeName.bind(this, 'Evan')} 
          changed = {this.changeName} />
          
          <Person 
          name = {this.state.person[2].name} 
          age = {this.state.person[2].age} 
          changed = {this.changeName} />
        </div>    

        {/* change the name and age of state on button click event/  */}
        <button style = {{alignSelf : 'center'}} onClick = {this.changeState} className = "btn btn-primary">Change State</button>
      </div>
      // <Person name = "Priya" age = "20" />
    )
  }
}

export default App;


// STATES IN FUNCTION BASED COMPONENTS :-

// import { useState } from "react";      // useState is a hook

// const App = () => {
//   // State in the Function-based Component

//   const [personState, setPersonState] = useState({     // here, personState --> initial State & setPersonState --> state after editing
//     person : [
//       {name : 'Maxilliam', age : '21'},
//       {name : 'Evan Potter', age : '25'},
//       {name : 'Benjamin', age : '27'}
//     ],

//     otherState : 'An Other State'
//   })
//   console.log(personState);

//   const changeState = () => {
//     // setPersonState is executing the set method of the state
//     setPersonState({
//       person : [
//         {name : 'Max', age : '21'},
//         {name : 'Evan', age : '25'},
//         {name : 'Ben', age : '27'},        
//       ],
//       otherState : personState.otherState
//     })   
//   }
//   console.log(personState);           // You will find the changd value here

//   return(
//     // <Person name = "Max" age = '21' />
//     // Accessing the state from function-based Components
//     <div>
//       <Person name = {personState.person[0].name} age = {personState.person[0].age} />
//       <Person name = {personState.person[1].name} age = {personState.person[1].age} />
//       <Person name = {personState.person[2].name} age = {personState.person[2].age} />
//       <button className = "btn btn-success" onClick = {changeState}>Change State</button>
//     </div>
//   )
// }
// export default App;