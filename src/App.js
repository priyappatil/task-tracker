import Header from './Components/Header'

function App() {
  return (
    <div className="App">
      <div className="container">
        {/* <Header title = 100 id = "False" /> */}
        <Header title = "Heading-1" id = {-1} />
        <Header />
        <Header title = "Heading-2" />
        <Header id = {-2} />
      </div>
    </div>
  );
}

export default App;

// {} => Because we are using JSX