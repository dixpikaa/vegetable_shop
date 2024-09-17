
import React from "react";
import Contact from "./components/Contact";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Blogs from "./components/Blogs";
import About from "./components/About";


function App() {


  return (
    <Router>
    <div className="App">
   
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/blog" element={<Blogs/>}/>
        <Route path="/about" element={<About/>}/>

      </Routes>

    </div>
  </Router>
);
}

     





export default App;
