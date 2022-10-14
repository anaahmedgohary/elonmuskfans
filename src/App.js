import './App.css';
// import svgback from "./images/SVG/Untitled-3.svg";
//import { Router, Route, Routes } from "react-router-dom"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from './components/header/header';
import MyTester from './components/tester';


function App()
{
  
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<MyTester />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
