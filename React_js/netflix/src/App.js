import "./App.css";
import Container from "./Components/Container";
import Heading from "./Components/Heading";

function App() {
  return (
    <div className="App">
      <Heading />
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-3 m-0 p-0">
            <Container 
              movieName ='Dil Bechara he humara'
              img= 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsJHTSDIXGo7Krjjn4MoeyqXZCcoNtUQim6g&usqp=CAU'
            />
          </div>
          <div className="col-12 col-md-3 m-0 p-0">
            <Container />
          </div>
          <div className="col-12 col-md-3 m-0 p-0">
            <Container />
          </div>
          <div className="col-12 col-md-3 m-0 p-0">
            <Container />
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-3 m-0 p-0">
            <Container movieName ='Dil Bechara he humara'/>
          </div>
          <div className="col-12 col-md-3 m-0 p-0">
            <Container />
          </div>
          <div className="col-12 col-md-3 m-0 p-0">
            <Container />
          </div>
          <div className="col-12 col-md-3 m-0 p-0">
            <Container />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
