import React from 'react';
import './App.css';
import Navbar from "./components/Navbar"
import Footer from './components/Footer';

import Contact from "./pages/Contact.js"
import Aboutme from "./pages/Aboutme.js"
import Homepage from "./pages/Homepage.js"
import Portfolio from "./pages/Portfolio.js"

import {BrowserRouter as Switch, Route, BrowserRouter} from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <BrowserRouter>        
          <Switch>
            <Route exact path="/">
              <Homepage />
            </Route>
            <Route exact path="/home">
              <Homepage />
            </Route>
            <Route exact path="/portfolio">
              <Portfolio />
            </Route>
            <Route exact path="/aboutme">
              <Aboutme />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
          </Switch> 
        </BrowserRouter>   
      <Footer />
    </div>
  );
}

export default App;
