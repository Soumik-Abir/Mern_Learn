import React from "react";
import "./App.css";
import FoodItem from "./Components/FoodItem";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import About from "./Components/About";
// import Contact from "./Components/Contact";
// import Gallery from "./Components/Gallery";
// import Blog from "./Components/Blog";
// import Menu from "./Components/Menu";
// import Boots from './Components/Boots';
// import Pattern from './Components/Pattern';
// import Card from './Components/Card';
// import Box from './Components/Box';
// import Rom from './Components/Rom';

function App() {
  return (
    <div className="App">
      {/* <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Menu />}></Route>
          <Route exact path="/About" element={<About />}></Route>
          <Route exact path="/Contact" element={<Contact />}></Route>
          <Route exact path="/Gallery" element={<Gallery />}></Route>
          <Route exact path="/Blog" element={<Blog />}></Route>
        </Routes>
      </BrowserRouter> */}

      <FoodItem/>
    </div>
  );
}

export default App;
