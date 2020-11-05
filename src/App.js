import React from 'react';
import './App.css';
import {Router,Link} from "@reach/router";
import 'bootstrap/dist/css/bootstrap.min.css';
import Num from './components/Num';
import Color from './components/Color'

function App() {
  return (
    <div className="App" style={{backgroundColor: "whitesmoke"}}>
      <div className="d-flex col-8 mx-auto justify-content-around">
        <Link to='/'>Home</Link>
        <Link to= '/num'>Name</Link>
        <Link to='/word/color/bgc'>Color</Link>
      </div>
      <Router >
        <Num path=":num" />
        <Color path=":word/:color/:bgc" />
      </Router>
    </div>
  );
}

export default App;
