import React from 'react'; 
import {Component } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'; 
import Home from './Components/Home'; 
import Counter from './Components/Counter'; 
import About from './Components/About'; 
import Users from './Components/Users';
//import logo from './logo.svg'; import './App.css';
class App extends Component{ render() { return ( <>
<Router>
<Routes>
<Route path="/" element = {<Home />}/>
<Route path="/about" element = {<About />}/>
<Route path="/users" element = {<Users />}/>
<Route path="/Counter" element = {<Counter />}/>
</Routes>
</Router>
</>
);
}
}
export default App;