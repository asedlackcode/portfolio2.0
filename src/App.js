import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
function App() {
  return (
    <Router>
      <Nav/>
      <p>hello</p>
    </Router>
  );
}

export default App;
