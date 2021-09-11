import React from "react";
import {  BrowserRouter as Router, } from 'react-router-dom';
import RootRouter from './RootRouter'
import Footer from './components/footer/Footer'
import Header from "./components/header/Header";
import "./App.css";

function App() {
  return (
    <div className='container'>
      <Router>

        <Header />
        <RootRouter />
        <Footer />

      </Router>
    </div>
  );
}

export default App;