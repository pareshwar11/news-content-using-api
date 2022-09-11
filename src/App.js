
import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import Aboutpro from './components/Aboutpro';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Routes>
            <Route exact path="/" element={
              <>
                <Navbar />
                <News />
              </>
            }>
            </Route>
            <Route exact path="/about" element={
              <>
                <Navbar />
                <Aboutpro />
              </>
            }>
            </Route>
          </Routes>
        </Router>
      </>
    )
  }
}


