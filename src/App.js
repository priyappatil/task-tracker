// This App.js is a component.
import Header from './Components/Header'
import Button from './Components/Button'
import Tasks from './Components/Tasks'

// CSS in JavaScript
// const buttonStyles = {
//   backgroundColor : 'blue',
//   color : 'white',
//   padding : '20px'
// }

function App() {
  return (
    <div className="App">
      <div className="container">
        {/* <Header title = 100 id = "False" /> */}
        <Header title = "Heading-1" id = {-1} />
        {/* <Header /> */}
        {/* <Header title = "Heading-2" /> */}
        {/* <Header id = {-2} /> */}
        {/* <button style = {buttonStyles}>Add</button> */}
        <Button color = "white" backgroundColor = "red" text = "Hello" padding = "10px" />
        <Button backgroundColor="black" color="white" text="ClickMe" />
        <Tasks />
      </div>
    </div>
  );
}

export default App;

// {} => Because we are using JSX